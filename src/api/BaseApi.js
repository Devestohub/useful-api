// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:49:49
// Modified: 1/7/2020 12:49:50

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
