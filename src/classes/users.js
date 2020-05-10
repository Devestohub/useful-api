'use strict';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const fs = require('fs')
const path = require('path')

const Crypt = require('@hugovidafe/crypt')

/**
 * Database for users.
 * @param {number} id ID of the user.
 * @param {string} path_db The path where is the database.
 * 
 * @author Created by Hugovidafe <hugo.vidal.ferre@gmail.com>
 * @github https://github.com/Hugovidafe/hugovidafe-db 
 * @license http://opensource.org/licenses/MIT
 */

class User {
	constructor(id, path_db) {
		this.user_id = id;
		this.path_database = path_db;
		this.players = low(new FileSync(`${this.path_database}/users.json`));
		this.file_user = `${this.path_database}/${this.user_id}.json`;
		this.low_user = low(new FileSync(this.file_user));
	}


	/**
	 * Get the id of the mentioned player.
	 * @param {string} name Name of the player.
	 * @returns {string} Returns the id of the player.
	 * @example
	 * database.getPlayer('Hugovidafe')
	 *   .then(param => console.log(`The player "Hugovidafe" have this id: ${param}`)) // RESULT: The player "Hugovidafe" have this id: 324449297951096834
	 *   .catch(console.error);
	 */

	getPlayer(name) {
		return this.players.get(name).value()
	}

	/**
	 * Set a new player.
	 * @param {string} name Name of the new player.
	 * @param {string} id ID of the new player.
	 * @returns {void}
	 * @example
	 * database.setPlayer('Hugovidafe', '324449297951096834')
	 */

	setPlayer(name, id) {
		return this.players.set(name, id).write()
	}


	/**
	 * Get the info of the mentioned player.
	 * @param {string} name Name of the player.
	 * @param {string} param Info of the player to get.
	 * @returns {string} Returns the info of the player mentioned.
	 * @example
	 * database.getPlayerInfo('Hugovidafe', 'rol')
	 *   .then(param => console.log(`The player "Hugovidafe" have this rol: ${param}`)) // RESULT: The player "Hugovidafe" have this rol: "Developer"
	 *   .catch(console.error);
	 */

	getPlayerInfo(name, param) {
		return low(new FileSync(`${this.path_database}/${this.getPlayer(name)}.json`)).get(param).value()
	}


	/**
	 * Get the information about yourself.
	 * @param {string} param Information to obtain from oneself.
	 * @returns {string} Returns the information of oneself.
	 * @example
	 * database.getUserInfo('lang')
	 *   .then(param => console.log(`You have the language set to: ${param}`)) // RESULT: You have the language set to: "English"
	 *   .catch(console.error);
	 */

	getUserInfo(param) {
		return this.low_user.get(param).value()
	}

	/**
	 * Set the information about yourself.
	 * @param {string} param Parameter to configure itself.
	 * @param {string} value Parameter value to configure itself.
	 * @returns {void}
	 * @example
	 * database.setUserInfo('lang', "English")
	 */

	setUserInfo(param, value) {
		this.low_user.defaults({ discord: {}, user: {} }).write();
		return this.low_user.set(param, value).write()
	}

	/**
	 * Unset the information about yourself.
	 * @param {string} param Parameter to unconfigure itself.
	 * @returns {void}
	 * @example
	 * database.unsetUserInfo('lang', "English")
	 */

	unsetUserInfo(param) {
		return this.low_user.unset(param).write()
	}

	/**
	 * Encrypt the information about yourself.
	 * @param {string} algorithm Algorithm to use at the encryptation.
	 * @param {string} pass Password to use at the encryptation.
	 * @returns {string} Returns the information of oneself encrypted.
	 */

	encryptUserInfo(algorithm, pass) {
		try {
			const crypt = new Crypt(algorithm, pass)
			const data = fs.readFileSync(this.file_user)
			return crypt.encrypt(data)
		} catch (err) {
			console.error(err)
		}
	}

	/**
	 * Decrypt the information about yourself.
	 * @param {string} algorithm Algorithm used at the encryptation.
	 * @param {string} pass Password used at the encryptation.
	 * @param {string} encrypted The data encrypted to decrypt.
	 * @returns {object} Returns the information of oneself decrypted.
	 */

	decryptUserInfo(algorithm, pass, encrypted) {
		try {
			const crypt = new Crypt(algorithm, pass)
			return crypt.encrypt(encrypted)
		} catch (err) {
			console.error(err)
		}
	}

	/**
	 * Clone or backup the data of oneself.
	 * @param {string} dest_path Where goes to clone or backup.
	 * @returns {void}
	 */

	cloneUserInfo(dest_path) {
		return fs.copyFileSync(this.file_user, dest_path + this.user_id + path.extname(this.file_user));
	}
}

module.exports = User;