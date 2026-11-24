---
slug: event-ticket-booking
title: Event Ticket Booking
tagline: Object-oriented design in a Java desktop app.
summary: A multi-user ticket booking app in Java Swing. Customers browse events and book seats, administrators manage events and venues, and the class design keeps the two apart.
card: Java Swing booking app with separate customer and admin roles.
kind: Desktop application
group: coursework
order: 9
facts:
  - [Platform, Java desktop (Swing)]
  - [Architecture, MVC]
  - [Roles, Customer and administrator]
stack: [Java, Swing, MVC, Object serialisation]
image: /blog/img/tickets.webp
imageAlt: Architecture diagram of the booking system. Admin and customer workflow tiers and Swing view controllers connect to a central TicketCore RBAC module, which manages polymorphic entities, encapsulated inventory and a persistent repository.
---

## The goal

Build a desktop ticketing app that customers and administrators can both use, and apply object-oriented design properly along the way. That meant inheritance where it fits, polymorphism instead of type checks, and encapsulation around anything sensitive.

## Events as a class hierarchy

Concerts, sports fixtures and conferences price seats differently and have different capacity rules. Instead of switching on the event type, each kind of event extends an abstract `Event` class.

```java
public abstract class Event {
  public abstract double calculatePrice(SeatTier tier);
  public abstract boolean validateCapacity();
}
```

The booking code calls `calculatePrice` without knowing which kind of event it has. A new event type is a new class, not an edit to every place that prices a ticket.

## Two roles, one model

Administrators create events, change seating layouts and check revenue. Customers browse, reserve seats and get a receipt. Both work on the same domain model, and each role has its own Swing views and controllers, so customer screens never expose admin actions.

Payment details and admin credentials are private fields, reachable only through methods that validate their input.

## Keeping Swing out of the model

The app follows MVC. Domain classes know nothing about Swing, and controllers translate between the two, so the model can be tested without a UI. Swing work stays on the event dispatch thread. Seat inventory only changes in one place, which stops a seat being sold twice.

## Errors and saving

Custom exceptions cover bad input, such as malformed payment details or an overbooked event, and the UI reports them instead of crashing. Data is saved with Java object serialisation.
