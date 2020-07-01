// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:50:1
// Modified: 1/7/2020 12:50:3

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