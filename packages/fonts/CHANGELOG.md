# @ilo-org/fonts

## 0.1.0

### Minor Changes

- 391687e3e: - Fixes broken font imports in /font-css

  - Adds Google Font import declaration

  ```css
  @import url("@ilo-org/fonts/font-css/fonts-google.css");
  ```

## 0.0.7

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.

## 0.0.6

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now

## 0.0.5

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards

## 0.0.4

### Patch Changes

- 94bd642d9: ILOUAT-16: Clicking on the page should close subnav menu
  ILOUAT-26: mobile hamburger click shouldn't auto navigate to inside link
  ILOUAT-27: Menu take over on mobile should be the whole page without the ability to scroll past it
  ILOUAT-37: Subnav pane should properly open when subnav items are focused
- 79e17c5d3: Bufdixes to multiple components
- 7b3813bb1: Bugfixes to multiple components

## 0.0.3

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts

## 0.0.2

### Patch Changes

- b61692a: CSS should default to assuming fonts are being loaded via a server rather than by means of the monorepo
