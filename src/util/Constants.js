/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-03T14:38:32.556Z
Modified: 2020-06-04T14:56:02.328Z
*/

'use strict';

/**
 * Options for the API.
 * @typedef {Object} ApiOptions
 * @property {number|number[]|string} id ID of the account
 * @property {PathLike} [path_db] The path of the database
 * @property {PathLike} [path_backup_db] The path to backup the database
 */

exports.DefaultOptions = {
    id: null,
    path_db: './src/database',
    path_backup_db: './src/backup_database',
}