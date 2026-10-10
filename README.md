# samendolabs.com

Marketing site for Samendo Labs — an AI-native company.

Built with [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- Single landing page lives in `src/app/page.tsx`; design tokens (light/dark) in `src/app/globals.css`.
- Contact address is set via the `CONTACT_EMAIL` constant at the top of `src/app/page.tsx` (currently `hello@samendolabs.com`).
- Deploys cleanly to Vercel with no extra configuration.
