const fs = require('fs');
const path = require('path');
const ngrxGenerator = require('./ngrx/index.js');
// const containerGenerator = require('./container/index.js');
// const languageGenerator = require('./language/index.js');

module.exports = function (plop) {
	plop.setGenerator('ngrx', ngrxGenerator);
};