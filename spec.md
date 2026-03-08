# LocalBoost Web — Part A: Conversion & Lead Generation

## Current State

A full 18+ section agency website with:
- Sticky nav, hero, about, services, why-choose-us, portfolio demos (gym/coaching/salon preview pages), free demo banner, demo request form (backend-wired), AI Helper tool, cost calculator, pricing, before/after, testimonials placeholder, FAQ, audit form, contact, admin dashboard, final CTA banner, footer, floating WhatsApp button.
- EN/HI language toggle throughout.
- Backend: submitDemoRequest, submitAuditRequest, submitContactMessage, getDemoRequests, getSiteSettings, etc.
- Demo form uses local state only — no localStorage persistence.
- No urgency banner, no exit-intent popup, no comparison table.

## Requested Changes (Diff)

### Add

1. **Urgency/scarcity banner** — A slim dismissible top bar above the sticky nav (or inside the nav area, above all content) showing "Only 3 demo slots left this week — Book yours free →" with a CTA that scrolls to the demo form. Text is editable via a constant. Supports EN/HI. Can be dismissed (X button) and dismissal is stored in sessionStorage so it doesn't re-appear on refresh within same session.

2. **Exit-intent popup** — Triggered when the user moves the mouse above the viewport top edge (mouseleave on document with clientY < 5) on desktop, and on mobile via a scroll-up-fast heuristic (scrolling up quickly after scrolling down). Only fires once per session (sessionStorage flag). Shows a modal overlay: headline "Wait! Get your free demo before you leave", subtext "We'll build a preview website for your business — no payment, no obligation.", a primary CTA "Get My Free Demo" (scrolls to demo form and closes modal), a secondary CTA "Chat on WhatsApp" (opens WhatsApp link), and a close/dismiss button. Supports EN/HI copy.

3. **Progress-saving demo request form** — The existing DemoRequestForm should save field values (businessName, businessType, phone, language, message) to localStorage under the key `lb_demo_draft` on every change. On mount, pre-populate fields from localStorage if a draft exists. Show a subtle "Draft saved" indicator. On successful submit, clear the localStorage draft.

4. **Comparison table** — A new section `#comparison` inserted between the "Why Choose Us" section and the Portfolio/Demos section. Headline: "Why LocalBoost Web?" Three-column comparison table: LocalBoost Web vs. Hiring a Freelancer (other) vs. DIY (Wix/Squarespace). Rows: Price, Delivery Time, Mobile-Friendly, Local Business Focus, Free Demo, WhatsApp Support, Revisions, Ongoing Support. LocalBoost Web column highlighted. Supports EN/HI.

### Modify

- **Demo Request Form**: add localStorage draft persistence (see Add #3 above).
- **App component**: add urgency banner state (visible/dismissed) and exit-intent popup state (visible/triggered) at the root level. Pass isHindi to both.
- **Nav section**: urgency banner renders above the sticky header (outside the `<header>` element, before it in DOM order, also sticky so it scrolls away naturally or is fixed).

### Remove

Nothing removed.

## Implementation Plan

1. Add `UrgencyBanner` component: slim bar above the nav, dismissible via X, sessionStorage-backed, EN/HI copy, CTA scrolls to `demo-form`. Render at the top of App before `<Nav>`.
2. Add `ExitIntentPopup` component: modal overlay, desktop mouseleave trigger + mobile scroll-up heuristic, once-per-session sessionStorage flag, EN/HI copy, primary CTA + WhatsApp link + close button. Render at the App root alongside the other global elements.
3. Modify `DemoRequestForm`: on every field change save to `lb_demo_draft` in localStorage; on mount read from localStorage and pre-fill; on successful submit clear the key; show subtle "Draft saved" badge.
4. Add `ComparisonTable` section component: three-column table with LocalBoost Web highlighted, 8 comparison rows, EN/HI copy. Insert between `WhyChooseUs` and `Portfolio` in the App render tree. Add `id="comparison"` and add "Compare" link to nav.
5. Apply all `data-ocid` deterministic markers to new interactive surfaces.
