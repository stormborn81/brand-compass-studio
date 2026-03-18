

## Problem Diagnosis

The build issue stems from the `base: "/brand-compass-studio/"` setting in `vite.config.ts`. This prefix is intended for GitHub Pages deployment but causes asset loading failures in the Lovable preview environment, where the app is served from root (`/`).

Additionally, the `index.html` script tag uses `/src/main.tsx` which gets resolved differently when the base path is set.

## Plan

### Step 1: Fix Vite base path for dual environments
Update `vite.config.ts` to only apply the `/brand-compass-studio/` base path during production builds (for GitHub Pages), and use `/` during development:

```ts
base: mode === "production" ? "/brand-compass-studio/" : "/",
```

### Step 2: Add BrowserRouter basename
Update `src/App.tsx` to pass the correct `basename` to `BrowserRouter` so routes work on GitHub Pages:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

### Step 3: Fix index.html script source
Ensure the script tag in `index.html` works with the base path by using a relative path:

```html
<script type="module" src="./src/main.tsx"></script>
```

### Files Modified
- `vite.config.ts` — conditional base path
- `src/App.tsx` — BrowserRouter basename
- `index.html` — relative script src

