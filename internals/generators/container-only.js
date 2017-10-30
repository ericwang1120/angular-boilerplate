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

    actions.push({
      type: 'add',
      path: '../../src/app/{{dashCase name}}/{{dashCase name}}.module.ts',
      templateFile: './templates/container/container.module.ts.hbs'
    });

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
