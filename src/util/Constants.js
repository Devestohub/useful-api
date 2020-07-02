// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:48:4
// Modified: 2/7/2020 19:45:58

'use strict';

/**
 * Options for the API.
 * @typedef {Object} ApiOptions
 * @property {PathLike} [file_db] The file for use of database.
 * @property {PathLike} [path_langs] Where is the directory of the translations?
 * @property {Object} [roles] Roles to import
 */

exports.DefaultOptions = {
    file_db: null,
    path_langs: null,
    roles: { applications: { api: [ 'Developer', 'Admin', 'User' ] }, profiles: { Developer: [ 'api.*' ], Admin: [ 'api.Admin', 'api.User' ], User: [ 'api.User' ] } }
}