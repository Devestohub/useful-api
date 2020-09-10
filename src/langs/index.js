// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:50:1
// Modified: 10/9/2020 10:15:28

const i18n = require('i18n');

/**
 * The main hub for interating with the Translations.
 * @extends {i18n}
 *
 * @param {PathLike} [path] Folder of the translatios.
 *
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/useful-api
 * @license http://opensource.org/licenses/MIT
 */

function Langs(path) {
  if (!path) return;
  this.path = path;
  i18n.configure({
    autoReload: true,
    directory: this.path,
    objectNotation: true,
    syncFiles: true,
    updateFiles: true,
  });
  return i18n;
}

module.exports = Langs;
