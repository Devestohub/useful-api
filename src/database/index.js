// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:38
// Modified: 1/7/2020 12:49:39

const BaseDatabase = require("./Database");

class Database extends BaseDatabase {
    constructor(api) {
        if (!api) throw new Error("You need to specify a file to use as database.")
        if (!api.options) throw new Error("You need to specify a file to use as database.")
        if (!api.options.file_db) throw new Error("You need to specify a file to use as database.")
        super(api);
    }
}

module.exports = Database;