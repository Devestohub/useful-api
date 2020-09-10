// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:48:37
// Modified: 9/7/2020 19:57:1

'use strict';

const BaseApi = require('./BaseApi');
const Database = require('../database');
const Langs = require('../langs');
const Roles = require('roles');

/**
 * The main hub for interating with the API, and the starting point for any database and much.
 * @extends {BaseApi}
 *
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/useful-api
 * @license http://opensource.org/licenses/MIT
 */

class Api extends BaseApi {
  /**
   * @param {ApiOptions} [options] Options for the API.
   */
  constructor(options = {}) {
    super(Object.assign({ _apiVersion: '2' }, options));

    this._validateOptions();

    /**
     * Initiate a instance of Database.
     * @type {Database}
     */

    this.database = this.options.file_db
      ? new Database(this.options.file_db)
      : null;

    /**
     * Initiate a instance of translations.
     * @type {Langs}
     */

    this.langs = this.options.path_langs
      ? new Langs(this.options.path_langs)
      : null;

    this.options.roles ? Roles.import(this.options.roles) : null;

    /**
     * Initiate a instance of permissions.
     * @type {Roles}
     */

    this.roles = this.options.roles ? Roles : null;
  }

  /**
   * Validates the api options.
   * @param {ApiOptions} [options=this.options] Options to validate.
   * @private
   */

  _validateOptions(options = this.options) {
    if (options.roles && !(typeof options.roles === 'object')) {
      throw new Error('This option must be an object');
    }
    if (options.file_db && !(typeof options.file_db === 'string')) {
      throw new Error('This option must be a string');
    }
    if (options.path_langs && !(typeof options.path_langs === 'string')) {
      throw new Error('This option must be a string');
    }
  }
}

module.exports = Api;
