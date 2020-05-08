'use strict';

const roles = require('roles');

roles.addApplication("game", [ "MainDeveloper", "Developer", "Admin", "Player", "NonPlayer" ]);
roles.addProfile("MainDeveloper", [ "game.*" ])
roles.addProfile("Developer", [ "game.Admin", "game.Player", "game.NonPlayer" ]);
roles.addProfile("Admin", [ "game.Admin", "game.Player" ]);
roles.addProfile("Player", [ "game.Player" ]);
roles.addProfile("NonPlayer", [ "game.NonPlayer" ]);

module.exports = roles;