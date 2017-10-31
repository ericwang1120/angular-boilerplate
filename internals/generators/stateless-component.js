/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

// const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a stateless component',
  prompts: [{
    type: 'input',
    name: 'name',
    default: 'page',
    message: 'Type in name of the component',
  }, {
    type: 'input',
    name: 'path',
    default: '',
    message: 'type in the path inside app/ (e.g. if you want to put the component in app/shared, just type in shared)',
  }],

  actions: function (data) {
    let actions = [];

    actions.push({
      type: 'add',
      path: '../../src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.component.ts',
      templateFile: './templates/component/component.ts.hbs'
    }, {
        type: 'add',
        path: '../../src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.component.html',
        templateFile: './templates/component/component.html.hbs'
      }, {
        type: 'add',
        path: '../../src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: './templates/component/component.scss.hbs'
      }
    );

    return actions;
  }
}
