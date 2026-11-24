---
slug: embedded-payroll-system
title: Embedded Payroll System
tagline: A payroll manager in 2 KB of RAM.
summary: A payroll system for an Arduino Uno, written in C++ for my Embedded Systems Programming module. It had to fit in the ATmega328P's 2 KB of SRAM without ever allocating on the heap.
card: Payroll records on an Arduino Uno, in 2 KB of RAM.
kind: University module
group: coursework
order: 8
facts:
  - [Module, Embedded Systems Programming]
  - [Mark, "75% (first class)"]
  - [Hardware, Arduino Uno (ATmega328P)]
stack: [C++, Arduino Uno, ATmega328P, UART serial, LCD]
---

## The constraint

The task was a working payroll system. The catch was the hardware. An Arduino Uno's ATmega328P has 2 KB of SRAM, and that has to hold every employee record, every buffer and the call stack.

## No heap

On a chip this small, `malloc` and Arduino's `String` fragment memory until the program fails in ways that are hard to reproduce. I didn't allocate on the heap at all. Every buffer has a size fixed at compile time, so memory use can't creep up while the program runs.

Employee records are bit-packed structs. Fields that only need a few bits share a byte instead of taking one each, which leaves room for more records.

## A state machine for control flow

The program is a finite state machine. Each state handles one part of the flow and only moves on when a defined event arrives. That made the behaviour predictable, and I could test it by walking through the transitions one by one.

## Serial input that doesn't block

Commands arrive over UART. A naive parser waits for a whole line and stalls everything else. Mine reads whatever bytes have arrived on each pass of the loop, builds the command up in a fixed buffer, and acts once it's complete. The LCD shows status the whole time.

## Result

The project earned 75% in the module, a first.
