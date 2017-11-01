'use strict';
const baseConfig = require('.');

const config = Object.assign({}, baseConfig);

config.rules = Object.assign({}, config.rules, {
	indent: [true, 'spaces', 2]
});

module.exports = config;
