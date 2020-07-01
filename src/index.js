// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:2
// Modified: 1/7/2020 12:49:3

'use strict';

const Util = require('./util/Util');

module.exports = {
    // "Root" classes
    Api: require('./api/Api'),


    Database: require('./database'),
    Langs: require('./langs'),

    // Utilities
    Constants: require('./util/Constants'),
    Util: Util,
    version: require('../package.json').version,
}