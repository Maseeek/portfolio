---
slug: ent-care-hub
title: ENT Care Hub
tagline: Find and compare ENT specialists.
summary: A discovery site for ear, nose and throat consultants. Ratings, rankings, fees and clinic details are all computed in SQL from a normalised MySQL schema.
card: Find and compare ENT specialists.
kind: Full-stack project
year: 2025
group: projects
order: 7
facts:
  - [Back end, PHP REST API]
  - [Database, MySQL in third normal form]
  - [Front end, React]
stack: [PHP, MySQL, React, JavaScript, Chart.js, Bootstrap]
repo: https://github.com/Maseeek/entcarehub
---

## The problem

Patients looking for an ENT specialist struggle to compare them. Ratings, sub-specialties and waiting times are scattered or missing. ENT Care Hub puts consultants, clinics and verified reviews in one searchable place.

## Schema first

Most of the work is in the database. Consultants, clinics, sub-specialties and reviews each get a table, normalised to third normal form, with foreign keys and composite indexes on the columns that searches use.

Because nothing is duplicated, the numbers can't drift apart. Ratings, clinic equipment counts and fee comparisons are computed by SQL when you ask for them, not cached in extra columns.

## Ranking consultants

The leaderboard is one aggregate query. A consultant needs at least five reviews to be ranked, so a single glowing review can't put someone at the top.

```sql
SELECT c.id, c.name, AVG(r.rating) AS avg_score, COUNT(r.id) AS review_count
FROM consultants c
INNER JOIN reviews r ON c.id = r.consultant_id
GROUP BY c.id
HAVING review_count >= 5
ORDER BY avg_score DESC;
```

The full version also weights each score by review volume and by the category scores patients give.

## Search

The React front end filters by specialty and by distance from a location. Requests are debounced, so typing a name doesn't fire a query on every keystroke.

## Security

The PHP API uses prepared statements throughout, which rules out SQL injection, and hashes passwords with bcrypt. Sessions keep patients and verified practitioners apart, since they can do different things, and output is sanitised against XSS.
