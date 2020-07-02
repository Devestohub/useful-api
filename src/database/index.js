// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:38
// Modified: 2/7/2020 18:50:16

const BaseDatabase = require("./Database");

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
	 * @param {ApiOptions} [api] API.
     * @param {PathLike} [file_db] File of the database.
	 */
    constructor({ api, file_db }) {
        if (api.options.file_db) return super(api.options.file_db)
        if (file_db) return super(file_db)
        super();
    }
}

module.exports = Database;