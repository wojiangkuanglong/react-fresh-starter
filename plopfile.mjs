import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function findComponentDirectories(directoryPath, componentDirectories) {
  const files = readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = join(directoryPath, file);
    if (statSync(filePath).isDirectory()) {
      if (file === 'components') {
        componentDirectories.push(filePath);
      } else {
        findComponentDirectories(filePath, componentDirectories);
      }
    }
  });

  return componentDirectories;
}

const directoryPath = './src';
const componentDirectories = findComponentDirectories(directoryPath, []);

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('component', {
    description: '生成组件',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '请输入组件名称:',
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入组件描述:',
      },
      {
        type: 'list',
        name: 'outDir',
        message: '组件生成的位置?',
        default: componentDirectories[0],
        choices: componentDirectories,
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { componentName, description, outDir } = answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'generators/component/**',
        destination: `{{outDir}}/{{componentName}}`,
        base: 'generators/component',
        data: { componentName, description, outDir },
        abortOnFail: true,
      });

      return actions;
    },
  });
}
