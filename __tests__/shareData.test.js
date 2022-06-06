'use strict'
const PlayersScore = require("../modules/shareData.js");

describe("Players Score Confirmation", () => {
    test("Players First Initial Score has to be zero", () => {
      const firstScore=0;
      const player = {
        username: "Ndeme",
        score: firstScore,
      };
      expect(PlayersScore.initScore(player.username,player.score)).toEqual(true);
    });
  
  test("Players score can change", () => {
    const newScore=2
    const player = {
      username: "Ndeme",
      score: newScore,
    };

    expect(PlayersScore.upDateScore(player,newScore)).toEqual(true);
  });

  });

  describe("The Share PageUrl send the guest to the Game's Homepage", () => {
    test("Share link sends new player to the Game's Home page", () => {
     const pageUrl =('https://extremewordle.azurewebsites.net')
      expect(PlayersScore.getHomePageLink()).toEqual(pageUrl);
    });
  });
  
  describe("Social Media Share Url are correct and sends text to their users", () => {
    test("WhatsApp Share Url sends message to WhatsApp Users", () => {
     const whatsAppUrl =('https://wa.me/?text=')
      expect(PlayersScore.getWhatsAppShareLink()).toEqual(whatsAppUrl);
    });
    test("Twitter Share Url sends message to Twitter Users", () => {
     const TwitterUrl =('https://twitter.com/intent/tweet?text=')
      expect(PlayersScore.getTwitterShareLink()).toEqual(TwitterUrl);
    });
    test("Telegram Share Url sends message to Telegram Users", () => {
     const TelegramUrl =('https://t.me/share/url?url=')
      expect(PlayersScore.getTelegramShareLink()).toEqual(TelegramUrl);
    });
  });

