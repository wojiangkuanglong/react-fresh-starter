import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage('欢迎使用代码生成器! 🚀');

  plop.setHelper('pascalCase', (text) => {
    const words = text.replace(/([A-Z])/g, ' $1').trim();
    return words
      .split(/[-_\s]+/)
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  });

  plop.setGenerator('entity', {
    description: '创建一个新的 Entity (业务实体)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入 Entity 名称 (例如: user, product, board):',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Entity 名称不能为空';
          }
          if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'Entity 名称只能包含字母和数字，且必须以字母开头';
          }
          return true;
        },
      },
      {
        type: 'confirm',
        name: 'withApi',
        message: '是否需要生成 API 相关文件?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStore',
        message: '是否需要生成 Zustand Store?',
        default: true,
      },
    ],
    actions: (data) => {
      const actions = [];

      if (data?.withStore) {
        actions.push({
          type: 'add',
          path: 'src/entities/{{pascalCase name}}/model/use{{pascalCase name}}Store.ts',
          templateFile: 'plop-templates/store.hbs',
        });
      }

      if (data?.withApi) {
        actions.push({
          type: 'add',
          path: 'src/entities/{{pascalCase name}}/api/use{{pascalCase name}}Api.ts',
          templateFile: 'plop-templates/api.hbs',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('feature', {
    description: '创建一个新的 Feature (业务功能)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入 Feature 名称 (例如: auth, user-profile, product-list):',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Feature 名称不能为空';
          }
          if (!/^[a-zA-Z][a-zA-Z0-9-]*$/.test(input)) {
            return 'Feature 名称只能包含字母、数字和连字符，且必须以字母开头';
          }
          return true;
        },
      },
      {
        type: 'confirm',
        name: 'withApi',
        message: '是否需要生成 API 相关文件?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStore',
        message: '是否需要生成 Zustand Store?',
        default: true,
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/features/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/features/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/general.hbs',
        },
      ];

      if (data?.withStore) {
        actions.push({
          type: 'add',
          path: 'src/features/{{pascalCase name}}/model/use{{pascalCase name}}Store.ts',
          templateFile: 'plop-templates/store.hbs',
        });
      }

      if (data?.withApi) {
        actions.push({
          type: 'add',
          path: 'src/features/{{pascalCase name}}/api/use{{pascalCase name}}Api.ts',
          templateFile: 'plop-templates/api.hbs',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('widget', {
    description: '创建一个新的 Widget (复合UI组件)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入 Widget 名称 (例如: UserCard, ProductList, AuthModal):',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Widget 名称不能为空';
          }
          if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'Widget 名称只能包含字母和数字，且必须以字母开头';
          }
          return true;
        },
      },
      {
        type: 'confirm',
        name: 'withApi',
        message: '是否需要生成 API 相关文件?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStore',
        message: '是否需要生成 Zustand Store?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStories',
        message: '是否需要生成 Storybook Stories?',
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/widgets/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/widgets/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/general.hbs',
        },
      ];

      if (data?.withStore) {
        actions.push({
          type: 'add',
          path: 'src/widgets/{{pascalCase name}}/model/use{{pascalCase name}}Store.ts',
          templateFile: 'plop-templates/store.hbs',
        });
      }

      if (data?.withApi) {
        actions.push({
          type: 'add',
          path: 'src/widgets/{{pascalCase name}}/api/use{{pascalCase name}}Api.ts',
          templateFile: 'plop-templates/api.hbs',
        });
      }

      if (data?.withStories) {
        actions.push({
          type: 'add',
          path: 'src/widgets/{{pascalCase name}}/ui/{{pascalCase name}}.stories.ts',
          templateFile: 'plop-templates/stories.hbs',
        });
      }

      return actions;
    },
  });
}
