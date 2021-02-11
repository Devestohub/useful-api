// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:25
// Modified: 10/9/2020 10:55:19

'use strict';

const fs = require('fs');
const low = require('lowdb');
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
    this.file = file ? file : this.noFile;

    /**
     * @private
     */
    this.database = file ? low(new FileSync(this.file)) : false;
  }

  /**
   * @readonly
   * @private
   */

  get noFile() {
    console.log(
      'If you need a database, you need to specify a file to use as database.'
    );
  }

  /**
   * Gets an element with the specified key, and returns its value, or `undefined` if the element does not exist.
   * @param {string} key - The key to get from this database.
   * @returns {* | undefined} `undefined` if the element does not exist.
   * @readonly
   */

  get(key, callback) {
    try {
      if (this.has(key)) {
        callback(null, this.database.get(key).value());
        return this.database.get(key).value();
      } else {
        callback(null, undefined);
        return undefined;
      }
    } catch (error) {
      return callback(error);
    }
  }

  /**
   * Sets a new element in the database with the specified key and value.
   * @param {string} key - The key of the element to add.
   * @param {string | object} value - The value of the element to add.
   * @returns {string | object} the value you entered
   */

  async set(key, value, callback) {
    try {
      await this.database.set(key, value).write();
      if (this.has(key)) {
        callback(null, this.get(key));
        return this.get(key);
      } else {
        callback(null, undefined);
        return undefined;
      }
    } catch (error) {
      return callback(error);
    }
  }

  /**
   * Checks if an element exists in the database.
   * @param {string} key - The key of the element to check for.
   * @returns {boolean} `true` if the element exists, `false` if it does not exist.
   * @readonly
   */

  has(key, callback) {
    try {
      if (this.database.has(key).value()) {
        callback(null, true);
        return true;
      } else {
        callback(null, false);
        return false;
      }
    } catch (error) {
      return callback(error);
    }
  }

  /**
   * Deletes an element from the database.
   * @param {string} key - The key to delete from the database.
   * @returns {boolean} `true` if the element was removed, `false` if the element does not exist.
   */

  unset(key, callback) {
    if (this.has(key)) {
      try {
        this.database.unset(key).write();
        callback(null, true);
        return true;
      } catch (error) {
        return callback(error);
      }
    } else {
      callback(null, false);
      return false;
    }
  }

  /**
   * Add an element in the database with the specified key and value.
   * @param {string} key - The key of the element to push.
   * @param {string | object} value - The value of the element to push.
   * @returns {string | object} the value you entered
   */

  add(key, value) {
    Array.isArray(this.get(key))
      ? this.database.get(key).push(value).write()
      : this.set(key, [value]);
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
      const crypt = new Crypt(algorithm, pass);
      const data = fs.readFileSync(this.file);
      return crypt.encrypt(data);
    } catch (err) {
      return err;
    }
  }

  /**
   * Decrypt the database.
   * @param {string} algorithm - The algorithm you used in encryption.
   * @param {password} pass - The password you used in encryption.
   * @param {string} encrypted - The database encrypted.
   * @returns {object | *} the object that was encrypted or `err` on case of error
   */

  decrypt(algorithm, pass, encrypted) {
    try {
      const crypt = new Crypt(algorithm, pass);
      return crypt.decrypt(encrypted);
    } catch (err) {
      return err;
    }
  }
}

module.exports = BaseDatabase;
