# ProjectWebsite

Turborepo (npm workspaces) for my personal project showcase site. Responsive on mobile and desktop.

- `apps/web` – Next.js site (home page + project pages)
- `packages/ui` – shared UI components

## Commands
```
npm install
npm run dev    # start dev server
npm run build
```

Add a new project page under `apps/web/app/projects/<name>/page.tsx` and link it in `layout.tsx`/`page.tsx`.
