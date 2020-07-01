// Author: Hugovidafe <Hugo.vidal.ferre@gmail.com>
// Useful Api (c) 2020
// Created: 1/7/2020 12:48:4
// Modified: 1/7/2020 12:48:6

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
    roles: { applications: { api: [ 'MainDeveloper', 'Developer', 'Admin', 'BetaPlayer', 'Player', 'NonPlayer' ] }, profiles: {  MainDeveloper: [ 'api.MainDeveloper', 'api.Developer', 'api.Admin', 'api.BetaPlayer', 'api.Player', 'api.NonPlayer'  ],  Developer: [ 'api.Developer', 'api.Admin', 'api.BetaPlayer', 'api.Player', 'api.NonPlayer'  ],  Admin: [ 'api.Admin', 'api.BetaPlayer', 'api.Player' ],  BetaPlayer: [ 'api.BetaPlayer', 'api.Player' ],  Player: [ 'api.Player' ],  NonPlayer: [ 'api.NonPlayer' ] } }
}