module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    { name: "@storybook/addon-essentials", options: { actions: false } },
    // "@storybook/addon-interactions",
    "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['./public'],
};