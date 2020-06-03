/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-03T14:37:35.559Z
Modified: 2020-06-03T20:50:02.394Z
*/

const { DefaultOptions } = require('../util/Constants');
const Util = require('../util/Util');

class BaseApi {
    constructor(options = {}) {
        /**
         * The options the api was instantiated with@
         * @type {ApiOptions}
         */
        this.options = Util.mergeDefault(DefaultOptions, options);
    }
}

module.exports = BaseApi;