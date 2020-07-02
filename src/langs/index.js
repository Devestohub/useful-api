// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:50:1
// Modified: 2/7/2020 19:39:47

const i18n = require('i18n')

/**
 * The main hub for interating with the Translations.
 * @extends {i18n}
 * 
 * @param {ApiOptions} [api] API.
 * @param {PathLike} [path_langs] Folder of the translatios.
 * 
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/useful-api 
 * @license http://opensource.org/licenses/MIT
 */

function Langs({ api, path_langs }) {
    if (api.options.path_langs) {
        i18n.configure({
            autoReload: true,
            directory: api.options.path_langs,
            objectNotation: true,
            syncFiles: true,
            updateFiles: true
        })
        return i18n;
    }
    if (path_langs) {
        i18n.configure({
            autoReload: true,
            directory: path_langs,
            objectNotation: true,
            syncFiles: true,
            updateFiles: true
        })
        return i18n;
    }
    else console.log("If you are getting an error that something is not a function, it is because you must indicate the folder that contains the translation files.");
}

module.exports = Langs;