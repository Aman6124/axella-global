# Axella Global

A React website for a logistics business, bringing services, fleet information, company details, and contact pages into one interface.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- Five routes: Home, About, Services, Fleet, and Contact.
- Shared navigation and footer.
- Reusable hero, service card, and contact form components.
- Framer Motion animations and Tailwind styling.

## Run locally

Install Node.js compatible with Vite 7; the exact requirement is recorded under Vite's `engines` field in `package-lock.json`.

```bash
git clone https://github.com/Aman6124/axella-global.git
cd axella-global
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Available commands

- `npm run dev` — start the development server.
- `npm run build` — generate the production site in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

## Project structure

```text
src/
  components/   Navigation, footer, hero, service cards, contact form
  pages/        Home, About, Services, Fleet, Contact
  App.jsx       Application routes and shared layout
  index.css     Global styles
public/         Static assets and brand logo
```

## Deployment notes

Run `npm run build` and serve `dist/` with a static host. Because the app uses `BrowserRouter`, configure the host to serve `index.html` for application routes such as `/services`.

The reusable `ContactForm.jsx` currently logs submissions and shows a confirmation locally. Connect and validate a delivery service before relying on it for customer enquiries.

## Contributing

Open an issue with the affected page, expected behavior, and reproduction steps. For changes, run the build and lint commands and include screenshots when updating the interface.
