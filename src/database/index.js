// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// API (c) 2020
// Created: 29/6/2020 1:11:16
// Modified: 29/6/2020 1:43:27

const BaseDatabase = require("./Database");

class Database extends BaseDatabase {
    constructor(api) {
        if (api.options.file_db) {
            super(api);
        } else {
            throw new Error("You need to specify a file to use as database.");
        }
    }
}

module.exports = Database;