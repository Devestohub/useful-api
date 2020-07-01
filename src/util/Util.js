// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:48:53
// Modified: 1/7/2020 12:48:54

'use strict';

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const isObject = d => typeof d === 'object' && d !== null;

/**
 * Contains various general-purpose utility methods.
 */

class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`)
    }

    /**
     * Flatten an object. Any properties that are collections will get converted to an array of keys.
     * @param {Object} obj The object to flatten.
     * @param {...Object<string, boolean|string>} [props] Specific properties to include/exclude.
     * @returns {Object}
     */

    static flatten(obj, ...props) {
        if (!isObject(obj)) return obj;
    
        props = Object.assign(
            ...Object.keys(obj)
                .filter(k => !k.startsWith('_'))
                .map(k => ({ [k]: true })),
            ...props,
        );
    
        const out = {};
    
        for (let [prop, newProp] of Object.entries(props)) {
            if (!newProp) continue;
            newProp = newProp === true ? prop : newProp;
        
            const element = obj[prop];
            const elemIsObj = isObject(element);
            const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null;

            // If it's an array, flatten each element
            if (Array.isArray(element)) out[newProp] = element.map(e => Util.flatten(e));
            // If it's an object with a primitive `valueOf`, use that value
            else if (typeof valueOf !== 'object') out[newProp] = valueOf;
            // If it's a primitive
            else if (!elemIsObj) out[newProp] = element;
        }
    
        return out;
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