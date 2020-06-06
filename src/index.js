/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T09:40:19.887Z
Modified: 2020-06-06T22:48:44.075Z
*/

'use strict';

const Util = require('./util/Util');

module.exports = {
    // "Root" classes
    Api: require('./api/Api'),

    // Utilities
    Constants: require('./util/Constants'),
    Roles: require('./roles'), // TODO: To reconstruct!
    Util: Util,
    version: require('../package.json').version,
}