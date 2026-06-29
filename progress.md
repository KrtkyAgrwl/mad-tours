# MAD Tours — Landing Page Progress

## What we built

### Infrastructure
- **GitHub repo**: [KrtkyAgrwl/mad-tours](https://github.com/KrtkyAgrwl/mad-tours) — public, connected via `gh` CLI
- **Next.js 16** app (App Router, TypeScript, Tailwind v4) scaffolded under `web/`
- **Brand colour**: `#582A4A` (deep purple), dark variant `#3D1A35`, used consistently across all interactive elements
- **Fonts**: Geist Sans (body) + Playfair Display (italic headings via `var(--font-playfair)`)
- **Logo**: Real MAD Tours logo (`Mad_Tours_Logo.png`) copied to `web/public/logo.png`, served via `next/image`
- **Launch config**: `.claude/launch.json` set up so the preview server starts from `web/` on port 3000

---

### Components built

| Component | File | What it does |
|---|---|---|
| Navbar | `web/components/Navbar.tsx` | Real logo image, 6 nav links with active underline, 24/7 support pill, AMM ID badge, user greeting, mobile hamburger |
| Footer | `web/components/Footer.tsx` | Dark purple (`#1A0A2E`), 4 link columns, social icons, bottom bar |
| Hero | `web/components/Hero.tsx` | Mountain background, Playfair italic headline, subtitle, pill badge, search bar with interactive date picker; button says **SEARCH** (renamed from EXPLORE) |
| CardGrid | `web/components/CardGrid.tsx` | Section heading, 4 monument cards; **"View Directory"** is a filled `#582A4A` pill button linking to `/explore`; Taj Mahal links to `/monument/taj-mahal` |
| TajMahalPage | `web/app/monument/taj-mahal/page.tsx` | Full monument detail page with guide cards and expandable visitor hub |
| ExplorePage | `web/app/explore/page.tsx` | Guide directory — 15 guides, 6 filter controls, sort, active-chip strip, mobile drawer |
| GuideProfilePage | `web/app/guide/rajesh-kumar/page.tsx` | Full guide profile: sticky bottom bar, Trip Companion with gated chat, two-column layout |

### Date picker (inside Hero)
- Clicking **Book Date** opens an **Advance Reservation** popover
- Custom date input (past dates blocked) + 4 presets: Tomorrow, This Sat, This Sun, Next Week
- Active preset highlights in `#582A4A`; Apply commits the date to the search bar; outside click closes

### Card hover behaviour
- All 4 cards are symmetric: `#582A4A` outline border at rest
- On hover: card scales up (1.02×), border highlights, image zooms, CTA button fills solid `#582A4A`

### Monument Detail Page (`/monument/taj-mahal`)
- **Back to Dashboard** button returns to home
- **Official Visitor Advisory banner** (dark purple) — click to expand/collapse
  - Collapsed: shows "EXPAND VISITOR HUB" with `+` icon
  - Expanded: shows "HIDE VISITOR HUB" with `−` icon; reveals full white content panel below
- **Expanded content** — 7 numbered sections in a two-column layout:
  1. Tickets, Pricing & High-Value Perks
  2. Operating Hours & Weekly Off-Days
  3. Which Gate & Escape Comforts
  4. Packing Light & Cloakrooms
  5. Dress Code, Etiquette & Sanitation
  6. Regulated Transit & Terminals
  7. Hiring Guides & Emergency Care
- **Guide cards grid** (2-col tablet, 3-col desktop):
  - ON-TOUR guides show shadowed disabled **"Booked Now"** button + **"Busy: Available in X"** in rose text
  - Price shown as `INR X,XXX / Day` — no "MINISTRY BASE RATE" label anywhere
  - Rajesh Kumar's "Select & Proceed" links to `/guide/rajesh-kumar`

### Guide Directory Page (`/explore`)
- **15 guides** across 5 monuments and 3 states (Uttar Pradesh, Delhi, Rajasthan)
- **`FilterSidebar`** extracted as a top-level React component — prevents unmount/remount on parent re-render which would kill input focus
- **Filter order**: Search → State/Region → Site (contextual) → Min Rating → Language → Availability → Price
- **Site filter** only appears when a State is selected; options populate from `SITES_BY_STATE`; resets when state changes
- **Rating options descending**: 4.9 and above → 4.8 and above → 4.7 and above
- ON-TOUR guides: shadowed disabled "Booked Now" + "Busy: Available in X" text
- Rajesh Kumar "Select & Proceed" links to `/guide/rajesh-kumar`; all other guides show non-functional button for now
- Active filter chips below the filters header for quick clearing
- Mobile: filter drawer toggled with a pill button

### Guide Profile Page (`/guide/rajesh-kumar`)
- **"← Compare other Guides" back button** uses `router.back()` — always returns to the actual previous page, not hardcoded to `/explore`
- **Layout**: skip-the-line banner → two-column (left 2/3 + right 1/3) → Trip Companion (full width) → sticky bottom bar
- **Left column**: profile card (photo, verified badge, reg `MT-67432`, specialty, stats, language pills, certifications), bio, expandable Verified Rating Audit with rating bars, 2 traveler reviews, review guard, pricing CTA
- **Right column**: video intro thumbnail with play overlay, featured monument site card linking to `/monument/taj-mahal`
- **Trip Companion**: dark `#3D1A35` background, NO Route Map / Climate Advisories tabs
  - `hired = false` → locked state with "Book Rajesh to Unlock Chat" button
  - `hired = true` → full chat UI with micro-question chips (flip constant after payment)
- **Sticky bottom bar**: `fixed bottom-0 z-50` — photo, name, ✓ Verified Active, price with strikethrough, ⚡ 100% RISK-FREE PROMISE, "HIRE HIM NOW" CTA

---

## PRs merged / open

| PR | Branch | Status |
|---|---|---|
| [#1](https://github.com/KrtkyAgrwl/mad-tours/pull/1) | `add-contributing-guide` | ✅ Merged |
| [#2](https://github.com/KrtkyAgrwl/mad-tours/pull/2) | `feat/nextjs-navbar-footer` | Open |
| [#3](https://github.com/KrtkyAgrwl/mad-tours/pull/3) | `feat/hero-and-card-grid` | Open |
| [#4](https://github.com/KrtkyAgrwl/mad-tours/pull/4) | `feat/card-fixes-and-date-picker` | Open (current branch) |

---

## What's next

### Immediate (design fidelity)
- [x] Replace the orange `M` logo placeholder with the real MAD Tours logo asset
- [x] "EXPLORE" → "SEARCH" button in Hero
- [x] "View Directory" as prominent filled pill button in CardGrid
- [ ] Replace Unsplash placeholder images with licensed/owned monument photos
- [ ] Add left/right carousel arrows to the card grid

### Monument Detail Pages — remaining work
- [ ] Wire up 3 remaining monument cards (Fatehpur Sikri, Humayun's Tomb, Red Fort) — same structure as Taj Mahal
- [ ] Add real guide profile photos (currently using randomuser.me placeholder avatars)

### Guide Directory (`/explore`)
- [x] Built with 15 guides, contextual site filter, descending rating, ON-TOUR disabled state
- [ ] "Select & Proceed" for guides other than Rajesh Kumar → non-functional buttons currently

### Guide Profile Pages
- [x] `/guide/rajesh-kumar` — fully built with sticky bar, gated chat, back button
- [ ] Build profile pages for remaining guides
- [ ] Set `hired = true` after real payment confirmation to unlock chat

### Features to build
- [ ] **Search functionality** — wire up city/monument text input to filter cards or navigate to results
- [ ] **Booking flow** — select guide → choose slot → confirm → payment
- [ ] **Authentication** — sign in / sign out wired to real sessions (not placeholder text)

### Technical
- [ ] Replace static `MONUMENTS` array with a real data layer (API route or database)
- [ ] Mobile testing pass — verify hamburger menu, card scroll, date picker, explore filter drawer on narrow screens
- [ ] Deploy to Vercel (`vercel --prod` from `web/` folder)
