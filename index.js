const {Client, MessageEmbed} = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();
const sq = require('./flood');
const kahoot = require("kahoot-spam")

client.on("ready", () => {
  console.log("I am ready!");
});

  client.on("message", (message) => {
    if (message.content.startsWith("!help")) {

  const embed = new MessageEmbed();
  embed.setTitle("KahootFlood Guide");
  embed.setColor("#00ffff");
  embed.setDescription("!flood (game pin goes here) - Flood any Kahoot game with bots");
  message.channel.send(embed);
    }
  });

client.login(process.env.BOT_TOKEN);
