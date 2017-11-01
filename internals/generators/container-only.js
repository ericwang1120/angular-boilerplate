/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

// const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container',
  prompts: [{
    type: 'input',
    name: 'name',
    default: 'page',
    message: 'Type in name of the container',
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

    return actions;
  }
}
