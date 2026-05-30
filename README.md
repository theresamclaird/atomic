# Atomic

Atomic is a React component library consisting of

- Atoms: Simple React components
- Molecules: More complex components built from atoms
- Modules: JavaScript modules
- Themes: All components within Atomic are themed using Styled System
- Hooks: Simple React hooks

## Usage

I built these components both for fun and to use on my personal projects. I make no guarantees that these work as expected or are even useful to anybody except myself. Use at your own risk.

## Installation

Published on the public npm registry — no access token required.

```bash
npm install @theresamclaird/atomic
```

`react`, `react-dom`, and `prop-types` are peer dependencies, so install them alongside it if your project doesn't already have them.

## Linting

```bash
npm run lint
```

## Testing

```bash
npm test
```

## Build

```bash
npm run build
```

## Repository Hygiene

Coverage thresholds are set to 80%, and both testing and linting are checked in a husky pre-commit hook.

## Publishing

Releases publish automatically to the public npm registry via GitHub Actions
(trusted publishing / OIDC — no tokens stored). To cut a release:

```bash
npm version patch        # bump version and tag
git push && git push --tags
```

Then draft a GitHub Release from the new tag; the publish workflow builds,
tests, and publishes the package.

## Storybook

Components can be viewed from Storybook which is available publicly (see: https://www.atomiccomponentlibrary.com/). I recommend cloning the repository and spinning up Storybook locally:

```bash
# install dependencies
npm install

# spin up storybook
npm run storybook
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Adding New Components

Use plop to add and remove components:

```bash
npm run plop
```

Follow the (intuitive) prompts to add and delete components:

```bash
? [PLOP] Please choose a generator. (Use arrow keys)
❯ addComponent - New Component
  removeComponent - remove component
```
