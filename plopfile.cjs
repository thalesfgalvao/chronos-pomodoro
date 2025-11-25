module.exports = function (plop) {
  plop.setGenerator('component', {
    description: ' Generate index.tsx and styles.module.tsx files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente (PascalCase):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.module.css',
        templateFile: 'plop-templates/styles.css.hbs',
      },
    ],
  });
};
