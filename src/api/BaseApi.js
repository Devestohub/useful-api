/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T09:40:19.887Z
Modified: 2020-06-06T22:43:39.861Z
*/

const { DefaultOptions } = require('../util/Constants');
const Util = require('../util/Util');


/**
 * The base class for all APIs.
 */
class BaseApi {
    constructor(options = {}) {

        /**
         * The options the api was instantiated with
         * @type {ApiOptions}
         */
        this.options = Util.mergeDefault(DefaultOptions, options);
    }
}

module.exports = BaseApi;