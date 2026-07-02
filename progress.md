# MAD Tours — Progress

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind v4) under `web/`
- Brand: `#582A4A` / `#3D1A35` | Fonts: Geist Sans + Playfair Display
- Static export (`output: export`, `images: { unoptimized: true }`) for Hostinger

## Current branch
`master` — all work merged, deployed to `darkorchid-ram-628722.hostingsite.com`

## Pages built
| Route | File | Status |
|---|---|---|
| `/` | `web/app/page.tsx` | ✅ Done |
| `/explore` | `web/app/explore/page.tsx` | ✅ Done (15 guides, filters, mobile drawer) |
| `/monument/taj-mahal` | `web/app/monument/taj-mahal/page.tsx` | ✅ Done (visitor hub, 4 guide cards) |
| `/guide/rajesh-kumar` | `web/app/guide/rajesh-kumar/page.tsx` | ✅ Done (sticky bar, gated chat) |

## Components
`Navbar`, `Footer`, `Hero` (date picker), `CardGrid` — all in `web/components/`

## What's next
- [ ] Taj Mahal MVP — monument hero banner, real photo, booking flow
- [ ] Copy Taj Mahal page format to 3 remaining monuments (Fatehpur Sikri, Humayun's Tomb, Red Fort)
- [ ] Guide profile pages for remaining guides
- [ ] Search functionality — wire Hero search bar to results
- [ ] Booking flow — select guide → slot → confirm → payment
- [ ] Mobile testing pass
- [ ] Connect real domain on Hostinger
