/**
 * Component Generator
 */

module.exports = {
  description: 'Add a container with ngrx',
  prompts: [{
    type: 'input',
    name: 'name',
    default: 'page',
    message: 'Type in name of the container',
  }, {
    type: 'input',
    name: 'odd',
    default: 'odd',
    message: 'Type in odd name of the resource',
  }, {
    type: 'input',
    name: 'plural',
    message: 'Type in plural name of the resource',
    default: 'plural',
  }],

  actions: function (data) {
    let actions = [];

    actions.push(
      {
        type: 'add',
        path: '../../src/app/{{dashCase name}}/{{dashCase name}}.module.ts',
        templateFile: './templates/container/container.module.ts.hbs'
      }, {
        type: 'add',
        path: '../../src/app/{{dashCase name}}/{{dashCase name}}.component.ts',
        templateFile: './templates/container/container.component.ts.hbs'
      }, {
        type: 'add',
        path: '../../src/app/{{dashCase name}}/{{dashCase name}}.component.html',
        templateFile: './templates/container/container.component.html.hbs'
      }, {
        type: 'add',
        path: '../../src/app/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: './templates/container/container.component.scss.hbs'
      }, {
        type: 'add',
        path: '../../src/app/{{dashCase name}}/index.ts',
        templateFile: './templates/container/index.ts.hbs'
      }
    );

    return actions;

    // [{
    //   type: 'add',
    //   path: '../../src/app/{{dashCase name}}/{{dashCase name}}.module.ts',
    //   templateFile: './container.ts.hbs'
    // }
    //   , {
    //   type: 'add',
    //   path: '../../src/app/ngrx/{{dashCase plural}}/models/{{dashCase odd}}.ts',
    //   templateFile: './ngrx/models/model.ts.hbs'
    // }, {
    //   type: 'add',
    //   path: '../../src/app/ngrx/{{dashCase plural}}/effects/{{dashCase odd}}.ts',
    //   templateFile: './ngrx/effects/effects.ts.hbs'
    // }, {
    //   type: 'add',
    //   path: '../../src/app/ngrx/{{dashCase plural}}/services/{{dashCase odd}}.ts',
    //   templateFile: './ngrx/services/service.ts.hbs'
    // }, {
    //   type: 'add',
    //   path: '../../src/app/ngrx/{{dashCase plural}}/reducers/{{dashCase plural}}.ts',
    //   templateFile: './ngrx/reducers/reducers.ts.hbs'
    // }, {
    //   type: 'add',
    //   path: '../../src/app/ngrx/{{dashCase plural}}/reducers/index.ts',
    //   templateFile: './ngrx/reducers/index.ts.hbs'
    // }]
  }
}
