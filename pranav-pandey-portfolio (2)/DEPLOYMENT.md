# Deployment guide

This is a Next.js 16 portfolio app and can be deployed to Vercel or Netlify.

## Before deploying

```bash
pnpm install
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The app currently has no required runtime environment variables. `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` is not used by the portfolio and can remain unset for this project.

## Vercel

1. Import the repository in Vercel.
2. Select the detected Next.js framework preset.
3. Use `pnpm install` for the install command and `pnpm build` for the build command if Vercel does not detect them automatically.
4. Deploy. Vercel serves the Next.js app with its native App Router support.

## Netlify

1. Connect the repository in Netlify.
2. The included `netlify.toml` configures `pnpm build`, Node 20, and `@netlify/plugin-nextjs`.
3. Set the package manager to pnpm if prompted, then deploy.
4. Netlify uses the Next.js runtime plugin for App Router routes, assets, and image handling.

## Static assets and links

Brand assets live in `public/` and are referenced with root-relative URLs, such as `/pranav-logo.png`. External GitHub, LinkedIn, and email links are safe to use on both hosts.

## Production checks

After deployment, verify `/`, `/about`, `/skills`, `/learning`, `/projects`, `/contact`, and `/email`. Confirm the email CTA opens the mail client, external links open in a new tab, and the logo loads correctly.
