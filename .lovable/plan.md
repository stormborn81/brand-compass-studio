

## Slide Template Fixes

### 1. Replace logo on Cover and Thank You slides with uploaded transparent PNG

Copy `user-uploads://Transparent_Logo.png` to `src/assets/logo-transparent.png`. Import it in `SlideTemplates.tsx`. Replace the `logoPrimary` references on lines 83 and 446 with this new image. Apply `filter: brightness(0) invert(1)` to make it white on the dark green background.

### 2. Add commentary space to chart slides

For Data Single, Data Double, and Data Table slides:
- Reduce chart/table height
- Add a callout box below the title with a `Lightbulb` icon (lucide-react), light sage background (`#E8F0EA`), and 2-3 lines of placeholder commentary text

### 3. Redesign Experiment Results as 3-column layout

Replace the current 2-column layout with a 3-column grid:

- **Column 1 — Hypothesis** (structured format with orange labels):
  - We have observed [observation]
  - Which we believe [understanding]
  - If we [action]
  - We will [result]
  - Because [rationale]

- **Column 2 — Results**: Stacked metric cards (Conversion Rate, Stat Sig, Sample Size)

- **Column 3 — Verdict + Analysis**: Win/Loss badge top-aligned, followed by "Insights & Next Steps" bullet list

### Files modified
- Copy `Transparent_Logo.png` to `src/assets/logo-transparent.png`
- `src/pages/SlideTemplates.tsx` — swap logo, add chart commentary, redesign experiment slide

