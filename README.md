# Take Good Care Consulting

A standalone Next.js App Router one-page website using React, TypeScript and plain CSS. Includes the optimized photographs used in the preview. No paid services, environment variables, database or hosting-specific packages are required.

## Run locally

Use Node.js 22 LTS (or Node.js 20.9+). Unzip this folder, then run:

```bash
cd take-good-care-nextjs
npm install
npm run dev
```

Open http://localhost:3000. Edits update automatically.

## Edit the website

- `app/page.tsx`: page copy, navigation, services, values and contact links.
- `app/globals.css`: colours, typography, spacing and responsive layouts. Main colours are CSS variables at the top.
- `app/layout.tsx`: page title and search description.
- `public/images/`: mountain header, prairie photograph and Daena’s portrait.

The `booking` constant at the top of `app/page.tsx` currently opens an email requesting a free discovery session. Replace it with your booking URL when ready. Email and telephone links are active; there is no contact form backend.

## Production

```bash
npm run typecheck
npm run build
npm start
```

This export uses standard Next.js commands, independent of the Vinext runtime used to host the original private preview. The hosted preview does not automatically update when you edit this local copy.

## Images

Images are optimized WebP copies of the supplied photos. Keep your original uploads for full-resolution editing.
