# LocalBoost Web

## Current State

A full-stack freelancer/agency website for selling affordable websites to local businesses. Built with Motoko backend + React/TypeScript frontend. Parts 1–8 are complete:

- Nav, Hero, Footer, WhatsApp float button
- About, Services (9 cards), Why Choose Us (5 benefits)
- Portfolio (3 demo templates: Gym, Coaching, Salon with preview routes)
- Free Demo Banner + Demo Request Form (backend-wired, rate-limited)
- AI Website Helper Tool (business type selector, page recommendations, cost estimate, Hindi/English toggle)
- Cost Calculator (dropdown, slider, add-on checkboxes, live INR total)
- Pricing section (3 plans: Basic ₹2,999, Business ₹4,999, Advanced ₹7,999)
- Dynamic Preview System (slugged preview pages with expiry countdown)
- Admin Dashboard (auth-gated, tabs: Demo Requests, Audit Requests, Contact Messages, Site Settings)

Backend already has `submitAuditRequest` and `getAllAuditRequests` fully implemented. The admin Audit Requests tab already shows a basic table view.

Placeholder sections at bottom of main page: `<div id="faq" />` and `<div id="contact" />`

## Requested Changes (Diff)

### Add

**Part 9 — Free Audit Form**
- `FreeAuditForm` section replacing the `<div id="audit" />` placeholder (to be added after the pricing section and before FAQ)
- Section heading: "Get a Free Website Audit" with subtext about checking their existing online presence
- Form fields: Website URL or Google Maps link (required), Name (optional), Phone (optional)
- Submit wires to `actor.submitAuditRequest(websiteOrMapsUrl, name, phoneNumber)` 
- On success: show a sample audit checklist (6–8 items: Mobile-Friendly, Google Maps presence, Page Load Speed, Contact Form, WhatsApp button, SEO title/description, Social Proof, Gallery/Photos)
- Loading, success, and error states
- The existing Admin Audit Requests tab already shows data — improve it to match Demo Requests tab quality: add Refresh button, Export CSV, better empty state

**Part 10 — FAQ, Before vs After, Testimonials placeholder**
- `BeforeAfterSection`: two-column comparison. Without Website (red/X marks): Hard to find on Google, Lose customers to competitors, Looks less professional, Customers don't know your hours/prices. With Website (green/check marks): Found on Google, More customers, Builds trust, Easy to contact. CTA button at bottom.
- `Testimonials`: section with heading "What Our Clients Say" and honest placeholder — "Client reviews coming soon. Be one of our first featured clients — request your free demo today." Card grid (3 cards) with ghosted/empty style indicating upcoming slots, not fake reviews.
- `FAQ`: accordion with 8 questions in English with Hindi toggle. Questions: 1) Why do I need a website for my business? 2) How long does it take to build? 3) Is there any payment needed for the demo? 4) Can I update the website after it's built? 5) Is the website mobile-friendly? 6) What if I don't like the demo? 7) Do you provide hosting? 8) How do I contact you for support?

**Part 11 — SEO, analytics hook, sitemap, contact section**
- Replace `<div id="contact" />` placeholder with a real `ContactSection` featuring: WhatsApp link, phone, email (kkant5380@gmail.com / +91 87095 46323), working hours, and a contact form wired to `actor.submitContactMessage`
- Add `<Helmet>`-equivalent: inject dynamic `<title>` and `<meta name="description">` into `<head>` via `document.title` and a meta tag effect — use site defaults that can be overridden by admin settings
- Wire the `analyticsId` from `SiteSettings` into a `<script>` tag injected into `<head>` when the admin sets a GA4 ID (using a useEffect that inserts the gtag script if `analyticsId` is non-empty)
- Add a `/sitemap.xml` route served from the frontend by inserting a static `sitemap.xml` file in `/public` with the main page sections as anchored URLs
- In `AdminSiteSettings`, add a new "SEO & Publish" card group below Analytics with: Page Title field (for `<title>`), Meta Description field (textarea), Robots meta field (select: index/follow, noindex/nofollow), OG Title, OG Description — store in `SiteSettings` backend (but these fields can be frontend-only state for now if backend isn't yet updated — implement as frontend-only localStorage fields with a note)

### Modify

- Main `App()` render order: insert `BeforeAfterSection` after `Pricing`, then `Testimonials`, then `FreeAuditForm`, then `FAQ`, then `ContactSection` — replacing the placeholder divs
- `AdminAuditRequests` component: add Refresh button, Export CSV button, improve empty state messaging, add CSV export matching Demo Requests format
- `AdminSiteSettings`: add SEO/Publish settings group at the bottom (frontend-only with localStorage, labelled clearly as "Saved locally on this browser")

### Remove

- `<div id="faq" />` and `<div id="contact" />` placeholder divs in `App()`

## Implementation Plan

1. Add `FreeAuditForm` section with backend wiring, sample audit checklist on success
2. Improve `AdminAuditRequests` tab: Refresh, CSV export, better empty state
3. Add `BeforeAfterSection` component (two-column with icons, CTA)
4. Add `Testimonials` section (honest placeholder, no fake reviews, 3 ghost slots)
5. Add `FAQ` section with accordion and Hindi/English toggle
6. Replace `<div id="contact" />` with real `ContactSection` (form + contact details, wired to backend)
7. Add SEO/analytics effects: `document.title`, meta description injection, GA4 script injection from `analyticsId` setting
8. Add static `public/sitemap.xml`
9. Add SEO & Publish settings group in `AdminSiteSettings` (localStorage-only, labelled)
10. Update `App()` render order to include all new sections, remove placeholder divs
11. Validate (typecheck, lint, build)
