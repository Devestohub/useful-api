// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:2
// Modified: 2/7/2020 19:43:51

'use strict';

const Util = require('./util/Util');

module.exports = {
    // "Root" classes
    Api: require('./api/Api'),

    // Functions
    Database: require('./database'),
    Langs: require('./langs'),

    // Utilities
    Constants: require('./util/Constants'),
    Util: Util,
    version: require('../package.json').version,
}