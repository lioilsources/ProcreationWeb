# ProCreation Web — Plán migrace

## Cíl
Modernizace portfolia Bc. Lukáše Zdenka z WordPressu (2016) na moderní statický web 2026.

---

## Stack

| Vrstva | Technologie |
|--------|-------------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v3 |
| Animace | GSAP + ScrollTrigger (připraveno, zatím vanilla JS) |
| Ikony | SVG inline |
| Deploy | nginx:alpine v Docker |
| Tunnel | Cloudflare Tunnel (cloudflared) |
| Doména | ol1n.com |

---

## Architektura stránek

```
/              → česká homepage (single-page)
/en            → anglická homepage (single-page)
/cv            → česky tisknutelné CV
/en/cv         → anglicky tisknutelné CV
```

### Sekce na každé homepage (anchor scroll)
1. `#hero` — full-screen parallax, jméno, tagline, stats
2. `#about` — bio, skill bars, profil karta
3. `#tools` — 3D tilt tool karty (Unity, C#, Arduino, JS, AutoIt, PLC)
4. `#projects` — portfolio grid (Orbitron, Carrier Command, RS Plan, PacoGames)
5. `#experience` — vertikální timeline, 10 položek
6. `#contact` — dostupnost, email CTA

---

## Design systém

- **Default theme:** dark (`#0a0a0f`)
- **Light theme:** přepínatelný, persistent v `localStorage`
- **Jazyk:** CS/EN toggle, persistent v URL (`/` vs `/en`)
- **Accent barva:** coral `#ef997f` (zachována z originálu)
- **Font:** Inter Variable (Google Fonts)
- **Glassmorphism:** `backdrop-filter: blur(20px)` na header, kartách
- **Parallax:** CSS + JS mouse-tracking orby v hero sekci
- **Scroll reveal:** IntersectionObserver, `.reveal` → `.visible`
- **3D tilt:** tool karty reagují na `mousemove` (perspective 400px)
- **Skill bars:** animované šířkou při vstupu do viewportu

---

## Hosting — Cloudflare Tunnel

```
Internet → Cloudflare (HTTPS, CDN, DDoS) → cloudflared tunnel → nginx:alpine container
```

- Žádné otevřené porty na Ubuntu serveru
- HTTPS automaticky přes Cloudflare pro `ol1n.com`
- `.env` soubor s `CF_TUNNEL_TOKEN`

### Spuštění na serveru
```bash
cp .env.example .env
# Nastav CF_TUNNEL_TOKEN z: Cloudflare Zero Trust → Networks → Tunnels
docker compose up -d --build
```

---

## Zachované assety z originálu
- `BYDK.gif` — profilová fotka
- `rsplan095.png` — screenshot projektu RS Plan 095
- `logo_2-1.png` — původní logo (v `/public/assets/logo.png`)

---

## Repo
https://github.com/lioilsources/ProcreationWeb

---

## TODO / Další kroky
- [ ] Dodat skutečné screenshoty projektů (Orbitron Steam page, Carrier Command)
- [ ] Nastavit Cloudflare Tunnel token a nasadit na Ubuntu server
- [ ] Nakonfigurovat `ol1n.com` DNS → Cloudflare Tunnel
- [ ] Přidat OG image pro sociální sítě (`/public/og.png`)
- [ ] Zvážit přidání GSAP ScrollTrigger pro pokročilejší timeline animace
- [ ] Email adresa v `Contact.astro` — ověřit/aktualizovat
