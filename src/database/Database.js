// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:25
// Modified: 4/7/2020 13:33:20

'use strict';

const fs = require('fs')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const Crypt = require('@hugovidafe/crypt');

/**
 * Manages the database.
 * @abstract
 */

class BaseDatabase {
    constructor(file) {
        /**
         * @type {Api}
         * @private
         * @readonly
         */
        this.file = file? file: this.noFile;

        /**
         * @private
         */
        this.database = file? low(new FileSync(this.file)): false;
    }

    /**
     * @readonly
     * @private
    */

    get noFile() {
        console.log("If you need a database, you need to specify a file to use as database.");
    }

    /**
     * Gets an element with the specified key, and returns its value, or `undefined` if the element does not exist.
     * @param {string} key - The key to get from this database.
     * @returns {* | undefined} `undefined` if the element does not exist.
     * @readonly
     */

    get(key) {
        return this.has(key)? this.database.get(key).value(): undefined;
    }

    /**
     * Sets a new element in the database with the specified key and value.
     * @param {string} key - The key of the element to add.
     * @param {string | object} value - The value of the element to add.
     * @returns {string | object} the value you entered
     */

    async set(key, value) {
        await this.database.set(key, value).write();
        return this.get(key);
    }

    /**
     * Checks if an element exists in the database.
     * @param {string} key - The key of the element to check for.
     * @returns {boolean} `true` if the element exists, `false` if it does not exist.
     * @readonly
     */

    has(key) {
        return this.database.has(key)? true: false;
    }

    /**
     * Deletes an element from the database.
     * @param {string} key - The key to delete from the database.
     * @returns {boolean} `true` if the element was removed, `false` if the element does not exist.
     */

    unset(key) {
        return this.has(key)? this.database.unset(key).write(): false;
    }

    /**
     * Add an element in the database with the specified key and value.
     * @param {string} key - The key of the element to push.
     * @param {string | object} value - The value of the element to push.
     * @returns {string | object} the value you entered
     */

    add(key, value) {
        Array.isArray(this.get(key))? this.database.get(key).push(value).write(): this.set(key, [value]);
        return this.database.get(value).value();
    }

    /**
     * Creates an identical shallow copy of this database.
     * @returns {Database}
     * @readonly
     */

    get clone() {
        return this.database.clone().value();
    }

    /**
     * Encrypts the database.
     * @param {string} algorithm - The algorithm to use for encryptation.
     * @param {password} pass - The password to use for encryptation.
     * @returns {string | *} the database encryoted or `err` on case of error
     */

    encrypt(algorithm, pass) {
		try {
			const crypt = new Crypt(algorithm, pass)
			const data = fs.readFileSync(this.file)
			return crypt.encrypt(data)
		} catch (err) {
			return err;
		}
    }

    /**
     * Decrypt the database.
     * @param {string} algorithm - The algorithm you used in encryption.
     * @param {password} pass - The password you used in encryption.
     * @returns {object | *} the object that was encrypted or `err` on case of error
     */

    decrypt(algorithm, pass, encrypted) {
        try {
			const crypt = new Crypt(algorithm, pass)
			return crypt.decrypt(encrypted)
		} catch (err) {
			return err;
		}
    }
}

module.exports = BaseDatabase;