/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-03T13:55:44.904Z
Modified: 2020-06-04T14:55:30.941Z
*/

'use strict';

const BaseApi = require('./BaseApi')

const UserManager = require('../managers/users')

/**
 * Database for users.
 * @extends {BaseApi}
 * 
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/hugovidafe-db 
 * @license http://opensource.org/licenses/MIT
 */

class Api extends BaseApi {
	/**
	 * @param {ApiOptions} options Options for the API.
	 */
	constructor(options = {}) {
		super(Object.assign({ _apiVersion: "2" }, options));
		
		this.users = new UserManager(this);

		/**
		 * Time at which the api was last regarded as being in the `READY` state
		 * (each time the api disconnects and successfully reconnects, this will be overwritten)
		 * @type {?Date}
		 */
		this.readyAt = null;
	}

	/**
	 * How long it has been since the client last entered the `READY` state in milliseconds
	 * @type {?number}
	 * @readonly
	 */

	get uptime() {
		return this.readyAt ? Date.now() - this.readyAt : null;
	}

	// _validateOptions(options = this.options) {
	// 	if (typeof options.id !== 'number' || isNaN(options.id)) {
	// 		throw new TypeError('API_INVALID_OPTION', 'id', '...');
	// 	}
	// 	if (options.path_db && !(typeof options.path_db === "string")) {
	// 		throw new TypeError('API_INVALID_OPTION', 'path_db', '...');
	// 	}
	// 	if (options.path_backup_db && !(typeof options.path_backup_db === "string")) {
	// 		throw new TypeError('API_INVALID_OPTION', 'path_backup_db', "...");
	// 	}
	// }
}

module.exports = Api;