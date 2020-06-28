// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// API (c) 2020
// Created: 29/6/2020 1:15:12
// Modified: 29/6/2020 1:42:33

const i18n = require('i18n')

function Langs(api) {
    if (api.options.path_langs) {
        i18n.configure({
            autoReload: true,
            directory: api.options.path_langs,
            objectNotation: true,
            syncFiles: true,
            updateFiles: true
        })
        return i18n;
    } else {
        throw new Error("You need to specify a path to use as localization folder.");
    }
}

module.exports = Langs;