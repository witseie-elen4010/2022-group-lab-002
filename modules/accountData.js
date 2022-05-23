"use strict";

const Players = [];

module.exports = {
  add: function (player) {
    Players.push(player);
  },

  alreadyExists: function (email, username) {
    const foundAccount1 = Players.filter(
      (elem) => email === elem.email || username === elem.username
    );
    return foundAccount1.length > 0;
  },

  verify: function (username, password) {
    const foundAccount = Players.find(
      (elem) => username === elem.username && password === elem.password
    );
    return !!(
      foundAccount.username === username && foundAccount.password === password
    );
  },
  getData: function () {
    return Players;
  },
  getPassword: function (username) {
    const filteredPlayer = Players.find((elem) => username === elem.username);

    return filteredPlayer.password;
  },
};
