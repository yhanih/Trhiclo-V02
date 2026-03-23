# Expo Translation Workflow (Reference-first, App-first)

## Phase 1 — Bootable Expo foundation (completed)

The repo now starts from a **real Expo runtime shell**, not from web-exported screen code.

- Expo entrypoint and registration (`index.js`).
- Expo app config (`app.json`).
- Package scripts and runtime dependencies (`package.json`).
- Root app shell (`App.js`) that mounts a dedicated navigation shell.
- Navigation shell (`src/navigation/AppShell.js`) that keeps app chrome (bottom nav + FAB) stable.

## Phase 2 — Design-source isolation (completed)

The generated React files are treated as **reference-only source material** and moved to `/reference`:

- `reference/react-app.js`
- `reference/react-app(1).js` … `reference/react-app(7).js`

This keeps a clean separation:

- Track A = design references
- Track B = production native app

## Phase 3 — Shared design language extraction (completed)

A lightweight reusable system is centralized in:

- `src/designSystem.js`
- `src/theme/tokens.js`

Extracted primitives include:

- colors (light surface + dark surface + orange/lime accents)
- spacing scale
- corner-radius scale
- elevation/shadow tokens
- typography levels
- layout insets and nav config
- button variants

## Phase 4 — Native screen translation (completed, screen-by-screen)

Reference screens were mapped and rebuilt as native screens:

1. Home (`src/screens/HomeScreen.js`)
2. History (`src/screens/HistoryScreen.js`)
3. Shop (`src/screens/ShopScreen.js`)
4. Routine (`src/screens/RoutineScreen.js`)
5. Profile (`src/screens/ProfileScreen.js`)
6. Camera (`src/screens/CameraScreen.js`)
7. Scan Result (`src/screens/ScanResultScreen.js`)
8. Product Detail (`src/screens/ProductDetailScreen.js`)

## Phase 5 — Shared native components (completed)

Reusable app primitives:

- `Screen`
- `Card`
- `BottomNav`
- `FloatingActionButton`

Bottom nav structure and FAB placement were preserved as reusable runtime patterns rather than copied per-screen.

## Web-specific adaptations made

The following web-only patterns from references were translated to native equivalents:

- `BrowserRouter` / `Routes` / `Route` → app shell + native state flow
- DOM elements (`div`, `span`, `button`, `img`, `nav`) → `View`, `Text`, `Pressable`, `Image`, `ScrollView`
- injected CSS and keyframes → RN styles and state-driven render updates
- mouse/hover handlers → press handlers
- unsupported CSS effects (`backdropFilter`, CSS vars, web shadow strings) → RN-compatible style tokens

## Operational rule now enforced

After each major change, the project should remain bootable with:

```bash
npx expo start
```

## Bottom nav implementation note

To align with your provided reference repo (`iamitkhatkar/rn-expandable-tab-liquid-glass`), the runtime bottom nav now uses:

- frosted/glass container treatment
- attached circular plus action
- expandable quick-action panel
- plus icon rotation during expand/collapse

This keeps the Trhiclo color/type language while matching the expandable liquid-glass interaction model.

