'use strict';

const i18n = require('i18n');

i18n.configure({
    directory: `./src/database/i18n`,
    syncFiles: true,
    updateFiles: true,
    autoReload: true
})

module.exports = i18n;