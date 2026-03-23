# React Design Screen Audit → Expo Native Plan

## 1) Screens identified from source React files

- `react-app(1).js`: **Home dashboard** (greeting header, health summary card, mini metric cards, personalized product list, bottom nav + FAB).
- `react-app(2).js`: **Scan history / trends** (time filter, chart card, scan history timeline list, bottom nav).
- `react-app(3).js`: **Shop catalog** (search + filter controls, category pills, product grid cards, bottom nav).
- `react-app(4).js`: **Profile & settings** (profile hero, grouped settings rows, toggles, bottom nav).
- `react-app(5).js`: **Camera capture** (full-screen camera viewport, scan frame, shutter controls).
- `react-app(6).js`: **AI routine** (daily progress summary card, checklist-style step cards, bottom nav).
- `react-app(7).js`: **Product detail** (immersive hero image, floating top controls, product info and metrics, CTA actions).
- `react-app.js`: **Live scan result state** (dark immersive scan UI, top telemetry, scan frame, bottom card with action CTA).

## 2) Shared design language

- **Base palette:** cool light gray app background (`#F2F4F7`), white cards, dark charcoal sections (`#2B2F35`), orange accent (`#F46331`), muted body text (`#8E98A4`).
- **Rhythm:** 24px main screen padding, generous 16–32px section gaps, 12–16px internal card spacing.
- **Radius usage:** pills for filters/tabs, 12–16 for smaller elements, 24–32 for key cards and hero containers.
- **Card pattern:** rounded surfaces with subtle drop shadow on light theme; dark summary card variants with inverse text.
- **Buttons:** circular icon buttons in headers, rounded rectangle CTAs, small circular add buttons on product cards.
- **Bottom nav:** persistent rounded floating container with icon + label items and one highlighted active tab.
- **FAB:** plus button floating above bottom nav at lower-right for high-priority quick actions (camera / scan trigger).
- **Typography intent:** bold headings, compact captions, clean sans-serif hierarchy.

## 3) Repeated UI patterns and reusable components

Recommended shared native components:

- `Screen`: scroll-safe page wrapper with standard paddings and optional dark variant.
- `Card`: light and dark card surfaces with consistent radius/elevation.
- `BottomNav`: reusable floating nav for core tabs.
- `FloatingActionButton`: fixed lower-right plus CTA.
- Screen-local subcomponents to reuse where practical:
  - Search row (icon + input + filter button)
  - Category pill row
  - Product tile/card
  - Settings row
  - Routine step row
  - Date/timeline chip

## 4) Web-specific pieces needing React Native adaptation

- `BrowserRouter`, `Routes`, `Route`, `useNavigate`, `useLocation` → replaced with native app state navigation shell.
- `<div>`, `<span>`, `<button>`, `<img>`, `<nav>` DOM tree → replaced with `View`, `Text`, `Pressable`, `Image`, `ScrollView`.
- CSS-only properties not directly portable (`backdropFilter`, CSS vars, `boxShadow` strings, `dangerouslySetInnerHTML`) → translated to RN-compatible styles and structure.
- Style injection via `document.createElement('style')` and keyframes → replaced by static styles / state-driven visuals.
- Web hover/mouse handlers (`onMouseDown`, `onMouseUp`, hover overlays) → replaced with press interactions.
- `100vh`, browser scrollbar APIs, and web font imports → converted to native flex layout + typography fallback.

## 5) Native design system extracted for Expo build

- **Colors:** app background, card surfaces, dark surfaces, orange accent, lime scan accent, muted and inverse text tokens.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32.
- **Radius scale:** 12 / 16 / 24 / 32 / pill.
- **Elevation tokens:** soft card and floating nav/FAB shadows.
- **Layout tokens:** standard page padding, top offset, bottom inset for floating nav.
- **Button variants:** primary orange, dark secondary, and ghost.

## 6) Screen architecture in Expo-native structure

- Main tabs: Home, History, Shop, Routine, Profile.
- Overlay flows: Camera, Scan Result, Product Detail.
- Bottom nav preserved as reusable floating component.
- FAB preserved as reusable quick action trigger (opens camera flow).

