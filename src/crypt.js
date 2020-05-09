'use strict';

const crypto = require('crypto')

/**
 * Easy encryption and decryption.
 * @param {string} algorithm Algorithm to use at the encryptation.
 * @param {string} pass Password for use at the encryptation.
 */

class Crypt {
	constructor(algorithm, pass) {
		this.algorithm = algorithm;
		this.pass = pass;
	}


	/**
	 * Encrypt data.
	 * @param {object} toEncrypt Object to encrypt.
	 * @returns {string} Returns the object encrypted.
	 */

	encrypt(toEncrypt) {
		const text = JSON.stringify(toEncrypt)
		const cipher = crypto.createCipher(this.algorithm, this.pass)
		var crypted = cipher.update(text, 'utf8', 'hex')
		crypted += cipher.final('hex')
		return crypted
	}

	/**
	 * Decrypt data.
	 * @param {string} toDecrypt Object to encrypt.
	 * @returns {object} Returns the object decrypted.
	 */

	decrypt(toDecrypt) {
		const decipher = crypto.createDecipher(this.algorithm, this.pass)
		var dec = decipher.update(toDecrypt, 'hex', 'utf8')
		dec += decipher.final('utf8')
		return dec
	}
}

module.exports = Crypt;