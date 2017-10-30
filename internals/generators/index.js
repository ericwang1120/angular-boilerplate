const fs = require('fs');
const path = require('path');
const ngrxOnlyGenerator = require('./ngrx-only.js');
const containerOnlyGenerator = require('./container-only.js');
const containerWithNgrx = require('./container-with-ngrx.js');
const statelessComponent = require('./stateless-component.js');

module.exports = function (plop) {
	plop.setGenerator('Container with ngrx', containerWithNgrx);
	plop.setGenerator('Container only', containerOnlyGenerator);
	plop.setGenerator('Ngrx only', ngrxOnlyGenerator);
	plop.setGenerator('Stateless component', statelessComponent);
};
