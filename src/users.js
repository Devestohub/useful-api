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

	/**
	 * Connects to the database.
	 * @returns {void}
	 */

	connectDB() {
		this.setUserInfo('info.id', this.user_id)
		this.setUserInfo('info.dname', this.user_name)
		this.setUserInfo('info.rol', "NonPlayer")
		this.setUserInfo('info.lang', "es")
		this.setUserInfo('info.avatarurl', this.user_avatarurl)
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

	setPlayerInfo(name, param) {
		return low(new FileSync(`./src/database/users/${this.getPlayer(name)}.json`)).set(param).write()
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
		return this.user.set(params, value).write()
	}

	/**
	 * Simplified code for a quick command
	 * @param {string} uname In-game name
	 * @param {string} lang Bot language
	 * @returns {void} Nothing
	 */

	start(uname, lang, error) {
		if (!this.getPlayer(this.uname).value()) {
			this.players.set(this.uname, this.user_id).write()
			this.user.set('uname', uname).write();
		} else {
			return error = true;
		}
		if (!this.getUserInfo('rol') || this.getUserInfo('rol') == "NonPlayer") this.user.set('rol', "Player").write();
		if (!this.getUserInfo('level')) this.user.set('level', 0).write();
		if (lang) this.user.set('lang', lang).write();
	}
}

module.exports = User;







