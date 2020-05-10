'use strict';

module.exports = {
    // "Root" classes
    Users: require('./classes/users'),

    // Configuration for other project; if you want, you can use it.
    Langs: require('./config of the dependencies/langs'),
    Roles: require('./config of the dependencies/roles'),

    // Utilities
    version: require('../package.json').version
}