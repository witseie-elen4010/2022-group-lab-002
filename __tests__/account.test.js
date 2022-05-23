/* eslint-env jest */

const PlayersAccount = require("../modules/accountData");

describe("Player can be added to the daatabase array", () => {
  test("add player to the database", () => {
    const player = {
      username: "Mulow",
      password: "1234#Mulow",
      email: "nhlamulo@gmail.com",
    };
    PlayersAccount.add(player);
    expect(PlayersAccount.getData().length).toEqual(1);
  });
});

describe("Player has an account that exist", () => {
  test("sign up with an existing account", () => {
    const player = {
      username: "Mulow",
      password: "1234#Mulow",
      email: "nhlamulo@gmail.com",
    };
    expect(PlayersAccount.alreadyExists(player.email, player.username)).toEqual(
      true
    );
  });
});

describe("player login details are correct", () => {
  test("sign in with valid username and password", () => {
    const player = {
      username: "Mulow",
      password: "1234#Mulow",
    };
    expect(PlayersAccount.verify(player.username, player.password)).toEqual(
      true
    );
  });
});

describe("Read players password from database", () => {
  test("hashed password is the same as the database", () => {
    const player = {
      username: "Mulow",
      password: "1234#Mulow",
    };
    expect(PlayersAccount.getPassword(player.username)).toEqual(
      player.password
    );
  });
});
