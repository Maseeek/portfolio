---
id: post_init_sample_01
slug: architecting-distributed-ai-inference
title: Architecting distributed AI inference for low-latency vision
summary: How separating frame capture from inference, with shared-memory ring buffers and ONNX Runtime on TensorRT, took a live vision pipeline's p99 latency from 84 ms to 12.4 ms.
tags:
  - AI systems
  - Computer vision
  - Distributed systems
  - GPU acceleration
coverImage: /blog/img/nbn-dash.webp
published: true
readingTime: 3 min read
publishedAt: 2026-08-19T00:00:00.000Z
createdAt: 2026-08-19T00:00:00.000Z
updatedAt: 2026-11-24T00:00:00.000Z
---

## The problem

In live video analysis, latency is what people notice. A pipeline that handles one frame at a time (decode it, copy it to the GPU, run the model, read the result) copes at low frame rates and falls apart at 60 FPS. This post covers how the pipeline moved to an asynchronous design that keeps up with 60 FPS at under 15 ms end to end.

## Where the time went

Three costs stacked up.

1. Every raw frame was copied from CPU memory to GPU memory, one after another.
2. Python's global interpreter lock blocked the main loop while it waited on the model.
3. The queues had no limit. When the GPU slowed down, for example while throttling for heat, frames piled up and the system spent its time on stale ones.

## Separate capture from inference

Capture and inference now run independently, joined by a bounded ring buffer in shared memory. Capture never waits for the model. If inference falls behind, the oldest frames are dropped by timestamp, so results always describe the present instead of a backlog.

Each frame travels as a small packet. The region-of-interest box lets the model work on a crop instead of the full frame.

```ts
interface FramePacket {
  frameId: number;
  timestampNs: bigint;
  roiBoundingBox: [number, number, number, number];
  tensorBuffer: Float32Array;
}
```

> Dropping frames on purpose is the key decision. A bounded buffer that throws away old frames keeps latency flat when the GPU slows down. An unbounded queue turns a short slowdown into seconds of lag.

## The parts

- Decode threads write frames into POSIX shared memory, and inference workers read them in place, so frames are never copied between processes.
- ONNX Runtime runs the model through the TensorRT execution provider, which compiles it into a CUDA engine tuned to the specific GPU.
- After inference, a physics filter fits a polynomial to the ball's path at 1000 Hz. It fills in frames the model missed and rejects detections that don't fit the trajectory.

## Results

Moving from synchronous request and response to streaming inference cut p99 latency from 84 ms to 12.4 ms.

## What's next

INT8 quantisation would make the model smaller and faster again, and WebGPU could move some of this work into the browser.
