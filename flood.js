const {Client, MessageEmbed} = require('discord.js');
var kahootSpam = require("kahoot-spam")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const kahoot = require("kahoot-spam");
const { spam } = require('kahoot-spam');
const KahootSpam = require('kahoot-spam');

client.on("ready", () => {
  console.log("Flood Ready!");
});

let userCooldown = {};

client.on("message", (message) => {
  if (message.content.startsWith("!flood")) {
    for (i = 0; i < 5; i++) {
      let api = KahootSpam
      var pin = (message.content.replace('!flood ', ''));
      api.spamWithAnswers(pin, "Hi", 100, 1)
    }

        const embed = new MessageEmbed();
        embed.setTitle("Kahoot Flooder");
        embed.setColor("#00ffff");
        embed.setDescription("Flooding Kahoot game " + (message.content.replace('!flood ', '')));
        message.channel.send(embed);
    }
  });



client.login(process.env.BOT_TOKEN);
