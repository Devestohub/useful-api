'use strict';

const Util = require('./util/Util');

module.exports = {
    // "Root" classes
    BaseApi: require('./api/BaseApi'),
    Api: require('./api/Api'),

    // Configuration for other project; if you want, you can use it.
    Langs: require('./config of the dependencies/langs'),
    Roles: require('./config of the dependencies/roles'),

    // Utilities
    Constants: require('./util/Constants'),
    Util: Util,
    version: require('../package.json').version,

    // Shortcuts to Util methods
    database: Util.database,
}