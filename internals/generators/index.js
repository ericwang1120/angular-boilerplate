const fs = require('fs');
const path = require('path');
const ngrxOnly = require('./ngrx-only.js');
const containerOnly = require('./container-only.js');
const containerWithNgrx = require('./container-with-ngrx.js');
const statelessComponent = require('./stateless-component.js');

module.exports = function (plop) {
	plop.setGenerator('container-with-ngrx', containerWithNgrx);
	plop.setGenerator('container-only', containerOnly);
	plop.setGenerator('ngrx-only', ngrxOnly);
	plop.setGenerator('stateless-component', statelessComponent);
};
