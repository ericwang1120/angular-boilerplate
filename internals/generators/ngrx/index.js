/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

// const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'input',
    name: 'odd',
    default: 'odd',
    message: 'Type in odd name the resource',
  }, {
    type: 'input',
    name: 'plural',
    message: 'Type in plural name the resource',
    default: 'plural',
  }],

  actions: [{
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/actions/{{dashCase odd}}.ts',
    templateFile: './ngrx/actions/action.ts.hbs'
  }, {
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/models/{{dashCase odd}}.ts',
    templateFile: './ngrx/models/model.ts.hbs'
  }, {
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/effects/{{dashCase odd}}.ts',
    templateFile: './ngrx/effects/effects.ts.hbs'
  }, {
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/services/{{dashCase odd}}.ts',
    templateFile: './ngrx/services/service.ts.hbs'
  }, {
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/reducers/{{dashCase plural}}.ts',
    templateFile: './ngrx/reducers/reducers.ts.hbs'
  }, {
    type: 'add',
    path: '../../src/app/ngrx/{{dashCase plural}}/reducers/index.ts',
    templateFile: './ngrx/reducers/index.ts.hbs'
  }]
}
