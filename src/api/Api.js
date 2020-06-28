/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T09:40:19.887Z
Modified: 29/6/2020 1:19:49
*/

'use strict';

const BaseApi = require('./BaseApi')
const Database = require('../database');
const Langs = require('../langs')
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
		super(Object.assign({ _apiVersion: "1" }, options));

		this._validateOptions();

		/**
		 * Initiate a instance of Database.
		 * @type {Database}
		 */

		this.database = new Database(this);

		/**
		 * Initiate a instance of translations.
		 * @type {Langs}
		 */

		this.langs = new Langs(this);

		Roles.import({ applications: { api: [ 'MainDeveloper', 'Developer', 'Admin', 'BetaPlayer', 'Player', 'NonPlayer' ] }, profiles: {  MainDeveloper: [ 'api.MainDeveloper', 'api.Developer', 'api.Admin', 'api.BetaPlayer', 'api.Player', 'api.NonPlayer'  ],  Developer: [ 'api.Developer', 'api.Admin', 'api.BetaPlayer', 'api.Player', 'api.NonPlayer'  ],  Admin: [ 'api.Admin', 'api.BetaPlayer', 'api.Player' ],  BetaPlayer: [ 'api.BetaPlayer', 'api.Player' ],  Player: [ 'api.Player' ],  NonPlayer: [ 'api.NonPlayer' ] } });

		/**
		 * Initiate a instance of permissions.
		 * @type {Roles}
		 */

		this.roles = Roles;
	}

	/**
	 * Validates the api options.
	 * @param {ApiOptions} [options=this.options] Options to validate.
	 * @private
	 */

	_validateOptions(options = this.options) {
		if (options.file_db && !(typeof options.file_db === "string")) {
			throw new Error('This option must be a string');
		}
		if (options.path_langs && !(typeof options.path_langs === "string")) {
			throw new Error('This option must be a string');
		}
	}
}

module.exports = Api;