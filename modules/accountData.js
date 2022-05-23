"use strict";

const { use } = require("bcrypt/promises");

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

  verify: function (username) {
    const foundAccount = Players.filter(
      (elem) => username === elem.username //&& password === elem.password
    );
    return foundAccount.length>0;
  },
  getData: function () {
    return Players;
  },
  getPassword: function (username) {
    if(this.verify(username))
    {
      const filteredPlayer = Players.find((elem) => username === elem.username);

    return filteredPlayer.password;
    }
    else{
      return "";
    }
  },
};
