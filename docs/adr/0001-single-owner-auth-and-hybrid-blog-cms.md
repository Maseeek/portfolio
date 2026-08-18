# Single-Owner Authentication Guard and Hybrid Blog Architecture

The portfolio implements a Single-Owner authentication model (`Owner` vs. `Visitor`) rather than a multi-role RBAC schema. The Owner gains exclusive access to the private Brand Lab and dynamic Blog Post authoring suite under the `/admin` route namespace, while unauthenticated Visitors receive a 404 on administrative and internal branding paths. Dynamic markdown Blog Posts coexist alongside existing bespoke Case Studies (`/blog/[slug]`) to maintain high-touch interactive demonstrations without sacrificing publishing velocity.
