# css-modules-bundler-compatibility

This repository is for checking the compatibility differences of CSS Modules across various bundlers.

## Environments

- next@16.1.1
- vite@7.3.1
- webpack@5.104.1
- css-loader@7.1.2

## Resolver

✅: Resolved successfully  
❌: Build error occurs  
⚠️: Ignored without being resolved  

| Code                                                | turbopack | vite | webpack (css-loader) | webpack (native css) |
| --------------------------------------------------- | --------- | ---- | -------------------- | -------------------- |
| `@import './a.module.css';`                         | ✅        | ✅   | ✅                   | ✅                   |
| `@import './non-existent.module.css';`              | ❌        | ❌   | ❌                   | ❌                   |
| `@import '~some-pkg/a.module.css';`                 | ❌        | ❌   | ✅                   | ❌                   |
| `@import 'some-pkg/b.module.css';`                  | ✅        | ✅   | ✅                   | ✅                   |
| `@import 'https://example.com/example.module.css';` | ⚠️        | ⚠️   | ⚠️                   | ⚠️                   |
| `@import 'https://example.com/example.module.css';` | ⚠️        | ⚠️   | ⚠️                   | ❌                   |
