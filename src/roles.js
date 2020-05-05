'use strict';

const roles = require('roles');

roles.addApplication("game", [ "Developer", "Admin", "Player", "NonPlayer" ]);
roles.addProfile("Developer", [ "game.*" ]);
roles.addProfile("Admin", [ "game.Admin", "game.Player" ]);
roles.addProfile("Player", [ "game.Player" ]);
roles.addProfile("NonPlayer", [ "game.NonPlayer" ]);

module.exports = roles;