---
slug: make-it-all
title: Make-It-All
tagline: A team workspace with roles and Kanban.
summary: An internal project management app built by a seven-person university team. I led the UI/UX architecture and the API contracts, and we demoed it to industry stakeholders.
card: Team workspace with roles, Kanban and analytics.
kind: University team project
year: 2025
group: projects
order: 6
facts:
  - [Team, Seven engineers]
  - [My role, UI/UX lead and API contracts]
  - [Shown to, Industry stakeholders]
stack: [React, Vite, TypeScript, Node.js, Express, MySQL, JWT, bcrypt, Chart.js, Tailwind CSS]
repo: https://github.com/Maseeek/Make-It-All-Team-20
---

## The brief

The brief was an internal productivity tool for a company called Make-It-All. It needed projects and tasks, a knowledge forum, and analytics for managers, with permissions that depend on your job.

There are three roles: Managers, Technical Specialists and Project Managers. Each one sees and changes different things, and the server enforces it with JWTs and bcrypt-hashed passwords.

## One repo, shared types

I set up a monorepo with the Express API and the Vite and React app side by side. Request and response shapes live in a shared TypeScript package, so when the API changes, the front end fails to compile instead of failing in front of a user.

```ts
// Shared by the API and the client
export interface ITaskResponse {
  id: string;
  status: 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETED';
  assignedRole: RoleType;
  deletedAt: string | null; // soft delete
}
```

## The database

MySQL runs behind a `mysql2` connection pool, so concurrent requests reuse connections. Every table uses soft deletes. Deleting a record sets `deletedAt` instead of removing the row, so mistakes can be audited and undone.

The manager dashboards run parameterised multi-table joins. That keeps them responsive with several people using the app and closes off SQL injection.

## The Kanban board

The board is drag and drop. A move updates the screen straight away, then the server confirms it. If the request fails, or the user isn't allowed to make that move, the card goes back where it was.

## Analytics

Managers get Chart.js dashboards with Gantt-style timelines, sprint velocity, and doughnut charts of how work is spread across the team.

## The demo

We presented the finished app to industry stakeholders, who praised how solid and easy to use it was.
