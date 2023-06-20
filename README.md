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

The package itself is published to github, and requires an access token to install.

```bash
npm install @theresamclaird/atomic
```

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

Coverage thresholds are set to 100%, and both testing and linting are checked in a husky pre-commit hook.

## Publishing

```bash
npm run patch
```

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
