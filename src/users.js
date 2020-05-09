'use strict';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const fs = require('fs')
const encrypter = require('object-encrypter')

/**
 * Communication for users in the database.
 */

class User {
	constructor(id) {
		this.user_id = id;
		this.players = low(new FileSync(`./src/database/users/users.json`));
		this.file_user = `./src/database/users/${this.user_id}.json`;
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
		return low(new FileSync(`./src/database/users/${this.getPlayer(name)}.json`)).get(param).value()
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
	 * @param {string} param Parameter to configure itself
	 * @param {string} value Parameter value to configure itself
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
	 * @param {string} param Parameter to unconfigure itself
	 * @returns {void}
	 * @example
	 * database.unsetUserInfo('lang', "English")
	 */

	unsetUserInfo(param) {
		return this.low_user.unset(param).write()
	}

	/**
	 * Encrypt the information about yourself.
	 * @returns {string} Returns the information of oneself encrypted.
	 * @example
	 * database.encryptUserInfo()
	 *   .then(param => console.log(`Your data encrypted: ${param}`)) // RESULT: Your data encrypted: "3e6627a6f6eg157an4h438d4gbs411h734k176b37dh62963ba3"
	 *   .catch(console.error);
	 */

	encryptUserInfo() {
		try {
			const engine = encrypter('dJ2D$VJAlvGjEz5&99deDapUNWhCAy8oHKG&@MIort@#nmD*GW', { ttl: true, algorithm: 'des-cfb1' })
			const data = fs.readFileSync(this.file_user)
			return engine.encrypt(data, 1)
		} catch (err) {
			console.error(err)
		}
	}
}

module.exports = User;