const fs = require('fs');
const rimraf = require('rimraf');

const componentFoldersInPath = path =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter(
      entry => entry.isDirectory() && fs.readdirSync(`${path}${entry.name}`).includes('index.js')
    )
    .map(folder => folder.name);

const componentsRootPath = './src/components/';
const componentPath = `${componentsRootPath}{{componentName}}/`;

const generateComponentsIndex = {
  type: 'add',
  force: true,
  templateFile: '.plop-templates/index.js',
  path: 'src/components/index.js',
  data: { components: () => componentFoldersInPath(componentsRootPath) },
};

module.exports = plop => {
  plop.setGenerator('addComponent', {
    description: 'New Component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name?',
      },
    ],
    actions: answers => [
      {
        type: 'add',
        templateFile: '.plop-templates/component/Component.jsx',
        path: `${componentPath}{{componentName}}.jsx`,
      },
      {
        type: 'add',
        templateFile: '.plop-templates/component/Component.stories.jsx',
        path: `${componentPath}{{componentName}}.stories.jsx`,
      },
      {
        type: 'add',
        templateFile: '.plop-templates/component/Component.test.jsx',
        path: `${componentPath}{{componentName}}.test.jsx`,
      },
      {
        type: 'add',
        templateFile: '.plop-templates/component/index.js',
        path: `${componentPath}index.js`,
      },
      generateComponentsIndex,
    ],
  });
  plop.setGenerator('removeComponent', {
    description: 'remove component',
    prompts: [
      {
        type: 'list',
        name: 'componentName',
        message: 'Component?',
        choices: componentFoldersInPath(componentsRootPath),
      },
    ],
    actions: [
      answers => {
        const path = plop.renderString(`${componentPath}`, answers);
        rimraf.sync(path);
        return `Removed ${path}`;
      },
      generateComponentsIndex,
    ],
  });
};
