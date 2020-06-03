'use strict';

const roles = require('roles');

roles.addApplication("game", [ "MainDeveloper", "Developer", "Admin", "BetaPlayer", "Player", "NonPlayer" ]);
roles.addProfile("MainDeveloper", [ "game.*" ])
roles.addProfile("Developer", [ "game.Developer", "game.Admin", "game.BetaPlayer", "game.Player", "game.NonPlayer" ]);
roles.addProfile("Admin", [ "game.Admin", "game.BetaPlayer", "game.Player" ]);
roles.addProfile("BetaPlayer", [ "game.BetaPlayer", "game.Player" ])
roles.addProfile("Player", [ "game.Player" ]);
roles.addProfile("NonPlayer", [ "game.NonPlayer" ]);

module.exports = roles;