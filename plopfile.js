const fs = require('fs');
const rimraf = require('rimraf');

const componentFoldersInPath = path => (
  fs.readdirSync(path, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.readdirSync(`${path}${entry.name}`).includes('index.js'))
    .map(folder => folder.name)
);

const componentPath = './src/components/{{componentName}}/';

const generateComponentsIndex = {
  type: 'add',
  force: true,
  templateFile: '.plop-templates/index.js',
  path: 'src/components/index.js',
  data: { components: () => componentFoldersInPath('./src/components/') },
};

module.exports = plop => {
  plop.setGenerator('addComponent', {
    description: 'New Component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name?',
      }
    ],
    actions: answers => [
      {
        type: 'add',
        templateFile: '.plop-templates/component/Component.jsx',
        path: 'src/components/{{componentName}}/{{componentName}}.jsx',
      },
      {
        type: 'add',
        templateFile: '.plop-templates/component/Component.stories.jsx',
        path: 'src/components/{{componentName}}/{{componentName}}.stories.jsx',
      },
      {
        type: 'add',
        templateFile: '.plop-templates/component/index.js',
        path: 'src/components/{{componentName}}/index.js',
      },
      generateComponentsIndex,
    ],
  });
  plop.setGenerator('removeComponent', {
    description: 'remove component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name?',
      }
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