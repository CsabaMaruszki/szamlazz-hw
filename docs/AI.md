# 1. Chat
### Prompt: 
create me a base ts playwright setup with eslint

### Answer: 
Base TypeScript Playwright project is in place with ESLint 9 (flat config). `tsc --noEmit` and `eslint .` both pass.

**Layout**
- `playwright.config.ts` — Chromium, HTML reporter, trace on first retry
- `eslint.config.mjs` — `@eslint/js` + `typescript-eslint` + `eslint-plugin-playwright`
- `tsconfig.json` — strict TS, no emit
- `tests/example.spec.ts` — sample title check against playwright.dev
- `postinstall` installs Chromium

**Commands**
```bash
npm test          # run tests
npm run test:ui   # Playwright UI
npm run lint      # ESLint
```

This machine had no Node on PATH, so Node 22 is in `~/.local`. Use it with:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

If you want Firefox/WebKit as well, or a `baseURL`/fixtures layout next, say which.

### Changes:

- Switch npm to pnpm
- Add `TypeChecked` linting to eslint config
- Add all mainstream browsers
- Add commitlint