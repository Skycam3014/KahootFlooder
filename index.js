const {Client} = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();
const sq = require('./flood');
const config = require('./config.json');
const kahoot = require("kahoot-spam")

client.on("ready", () => {
  console.log("I am ready!");
});

client.login(process.env.BOT_TOKEN);
