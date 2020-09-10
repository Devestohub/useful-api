// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:38
// Modified: 9/7/2020 19:58:14

const BaseDatabase = require('./Database');

/**
 * The main hub for interating with the Database.
 * @extends {BaseDatabase}
 *
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/useful-api
 * @license http://opensource.org/licenses/MIT
 */

class Database extends BaseDatabase {
  /**
   * @param {PathLike} [file] File of the database.
   */
  constructor(file) {
    if (!file) return;
    super(file);
  }
}

module.exports = Database;
