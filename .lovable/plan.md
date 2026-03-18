

# Slide Template Builder — Storm Jarvie Brand Deck

## What We're Building

A **Slide Template Preview page** within this project that renders all slide types at 1920×1080, scaled to fit the viewport. Each slide follows the brand guidelines (Forest Green primary, Signal Orange accent, Plus Jakarta Sans / JetBrains Mono / Source Serif 4, no gradients, layered shadows, 80px safe zone, 4-column Power Grid).

The output serves as a **visual reference and copyable template** for building the actual Google Slides deck.

## Your Requested Slides (14 types)

1. **Cover** — Brand mark, title, subtitle, date, dark forest bg
2. **Agenda** — Numbered list, left-aligned, max 6 items
3. **Full Text + Title** — L1 headline, body paragraph, left-aligned
4. **Half Text / Half Callout** — 50/50 split; right side has accent-bg stat or quote
5. **Half Text / Half Image** — 50/50 split; right side image placeholder
6. **Half Text / Desktop Screenshot** — Browser chrome mockup on right
7. **Half Text / Mobile Screenshot** — Phone frame mockup on right
8. **AB Test Comparison** — Two mobile frames side-by-side, labels "A" and "B"
9. **Experiment Results** — Hypothesis, result metric, verdict badge (Win/Loss/Inconclusive)
10. **Data: Single Chart** — Full-width chart area with title
11. **Data: Two Charts** — Side-by-side charts
12. **Data: Table** — Styled table with brand tokens
13. **Key Insight / Callout** — Large stat or quote centered, accent color
14. **Sub-Divider** — Section number + title, minimal, forest bg

## Recommended Additional Slides

15. **Thank You / Contact** — Closing slide with name, email, website, brand mark
16. **Timeline / Process** — Horizontal step-by-step flow (useful for project phases)
17. **Comparison / Before-After** — Two-column with red/green indicators
18. **Team / Bio** — Photo placeholder + role + key details (for proposals)

## Technical Approach

### New files
- `src/pages/SlideTemplates.tsx` — Main page with slide navigator
- `src/components/slides/SlideLayout.tsx` — 1920×1080 scaled wrapper
- `src/components/slides/` — One component per slide type (or a single file with all templates as data-driven variants)

### Scaling
All slides render at fixed 1920×1080, scaled via `transform: scale()` to fit the container. Thumbnail strip on the left for navigation.

### Brand tokens applied
- **Backgrounds**: White (`#F5F7F9`), Forest Green (`#1A4D2F`), Dark Charcoal
- **Typography**: Plus Jakarta Sans for headlines, JetBrains Mono for labels/data, Source Serif 4 for quotes
- **Accent**: Signal Orange for CTAs, highlight stats, badges
- **Charts**: Recharts with brand chart color series, mono-font axis labels, no gradients
- **Safe zone**: 80px padding all edges
- **Footer**: Brand mark (bottom-left) + slide number (bottom-right) on every slide

### Route
- `/slides` — accessible from the guidelines nav or directly

### Files modified
- `src/App.tsx` — add `/slides` route
- `src/components/guidelines/GuidelineNav.tsx` — add link to slide templates

