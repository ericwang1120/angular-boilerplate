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
    message: 'Type in odd name of ngrx',
  }, {
    type: 'input',
    name: 'plural',
    message: 'Type in plural name of ngrx',
    default: 'plural',
  }, {
    type: 'confirm',
    name: 'createNgrx',
    message: 'Do you need creating ngrx?',
    default: 'true',
  }],

  actions: function (data) {
    let actions = [];

    // create container components
    actions.push({
      type: 'add',
      path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.module.ts',
      templateFile: './templates/component/module.ts.hbs'
    }, {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.component.ts',
        templateFile: './templates/component/component.ts.hbs'
      }, {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.component.html',
        templateFile: './templates/component/component.html.hbs'
      }, {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.component.scss',
        templateFile: './templates/component/component.scss.hbs'
      }, {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/index.ts',
        templateFile: './templates/component/index.ts.hbs'
      }, {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.routes.ts',
        templateFile: './templates/component/component.routes.ts.hbs'
      }
    );

    // if ngrx is not created, creating ngrx module
    if (data.createNgrx) {
      actions.push({
        type: 'add',
        path: '../../src/app/core/ngrx/{{dashCase plural}}/actions/{{dashCase odd}}.ts',
        templateFile: './templates/ngrx/actions/action.ts.hbs'
      }, {
          type: 'add',
          path: '../../src/app/core/ngrx/{{dashCase plural}}/models/{{dashCase odd}}.ts',
          templateFile: './templates/ngrx/models/model.ts.hbs'
        }, {
          type: 'add',
          path: '../../src/app/core/ngrx/{{dashCase plural}}/effects/{{dashCase odd}}.ts',
          templateFile: './templates/ngrx/effects/effects.ts.hbs'
        }, {
          type: 'add',
          path: '../../src/app/core/ngrx/{{dashCase plural}}/services/{{dashCase odd}}.ts',
          templateFile: './templates/ngrx/services/service.ts.hbs'
        }, {
          type: 'add',
          path: '../../src/app/core/ngrx/{{dashCase plural}}/reducers/{{dashCase plural}}.ts',
          templateFile: './templates/ngrx/reducers/reducers.ts.hbs'
        }, {
          type: 'add',
          path: '../../src/app/core/ngrx/{{dashCase plural}}/reducers/index.ts',
          templateFile: './templates/ngrx/reducers/index.ts.hbs'
        });
    }

    return actions;
  }
}
