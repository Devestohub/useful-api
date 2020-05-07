'use strict';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

/**
 * Communication for users in the database.
 */

class User {
	constructor(id) {
		this.user_id = id;
		this.players = low(new FileSync(`./src/database/users/users.json`));
		this.user = low(new FileSync(`./src/database/users/${this.user_id}.json`));
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
		return this.user.get(param).value()
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
		this.user.defaults({ discord: {}, user: {} }).write();
		return this.user.set(param, value).write()
	}

	unsetUserInfo(param) {
		return this.user.unset(param).write()
	}
}

module.exports = User;