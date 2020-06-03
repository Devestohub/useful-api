/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-03T14:19:15.059Z
Modified: 2020-06-03T15:04:52.140Z
*/

'use strict';

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`)
    }
    
    static database(file) {
        return low(new FileSync(file))
    }

    /**
     * Sets default properties on an object that aren't already specified.
     * @param {Object} def Default properties
     * @param {Object} given Object to assign defaults to
     * @returns {Object}
     * @private
     */

    static mergeDefault(def, given) {
        if (!given) return def;
        for (const key in def) {
            if (!has(given, key) || given[key] === undefined) {
                given[key] = def[key];
            } else if (given[key] === Object(given[key])) {
                given[key] = Util.mergeDefault(def[key], given[key]);
            }
        }
    
        return given;
    }
}

module.exports = Util;