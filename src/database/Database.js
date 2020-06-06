/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T19:36:13.930Z
Modified: 2020-06-06T23:07:46.138Z
*/

'use strict';

const fs = require('fs')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const Crypt = require('@hugovidafe/crypt');

/**
 * Manages the database.
 * @abstract
 */

class Database {
    constructor(api) {
        /**
         * @type {Api}
         * @private
         * @readonly
         */
        this.api = api;

        /**
         * @private
         */
        this.database = low(new FileSync(this.api.options.file_db))
    }

    /**
     * Gets an element with the specified key, and returns its value, or `undefined` if the element does not exist.
     * @param {*} key - The key to get from this database.
     * @returns {* | undefined} `undefined` if the element does not exist.
     * @readonly
     */
    
    get(key) {
        return this.has(key) ? this.database.get(key).value() : undefined;
    }

    /**
     * Sets a new element in the database with the specified key and value.
     * @param {*} key - The key of the element to add.
     * @param {*} value - The value of the element to add.
     * @returns {void}
     */

    set(key, value) {
        return this.database.set(key, value).write();
    }

    /**
     * Checks if an element exists in the database.
     * @param {*} key - The key of the element to check for.
     * @returns {boolean} `true` if the element exists, `false` if it does not exist.
     * @readonly
     */

    has(key) {
        return this.database.has(key).value();
    }

    /**
     * Deletes an element from the database.
     * @param {*} key - The key to delete from the database.
     * @returns {boolean} `true` if the element was removed, `false` if the element does not exist.
     */

    unset(key) {
        return this.has(key) ? this.database.unset(key).write() : false
    }

    /**
     * Creates an identical shallow copy of this database.
     * @returns {Database}
     * @readonly
     */

    clone() {
        return this.database.clone().value();
    }

    /**
     * Encrypts the database.
     * @param {string} algorithm The algorithm to use for encryptation.
     * @param {password} pass The password to use for encryptation.
     * @returns {string}
     */

    encrypt(algorithm, pass) {
		try {
			const crypt = new Crypt(algorithm, pass)
			const data = fs.readFileSync(this.api.options.file)
			return crypt.encrypt(data)
		} catch (err) {
			console.error(err)
		}
    }

    /**
     * Decrypt the database.
     * @param {string} algorithm The algorithm you used in encryption.
     * @param {password} pass The password you used in encryption.
     * @returns {object}
     */
    
    decrypt(algorithm, pass, encrypted) {
        try {
			const crypt = new Crypt(algorithm, pass)
			return crypt.decrypt(encrypted)
		} catch (err) {
			console.error(err)
		}
    }
}

module.exports = Database;