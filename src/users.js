'use strict';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

/**
 * Communication for users in the database.
 */

class User {
	constructor(id, name, avatarurl) {
		this.user_id = id;
		this.user_name = name;
		this.user_avatarurl = avatarurl;
		this.players = low(new FileSync(`./src/database/users/users.json`));
		this.user = low(new FileSync(`./src/database/users/${this.user_id}.json`));
	}

	getPlayer(name) {
		return this.players.get(name).value()
	}

	setPlayer(name, id) {
		return this.players.set(name, id).write()
	}

	getPlayerInfo(name, param) {
		return low(new FileSync(`./src/database/users/${this.getPlayer(name)}.json`)).get(param).value()
	}

	/**
	 * Get the set value of the database user.
	 * @param {string} param Set a set value to return
	 * @returns {string} Returns the set value of the database user.
	 * @example
	 * database.get('lang')
	 *   .then(param => console.log(`Obtained set value of the database user: ${param}`))
	 *   .catch(console.error);
	 */

	getUserInfo(param) {
		return this.user.get(param).value()
	}

	setUserInfo(param, value) {
		this.user.defaults({ info: {} }).write();
		return this.user.set(param, value).write()
	}
}

module.exports = User;







