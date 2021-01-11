const {Client, MessageEmbed} = require('discord.js');
var kahootSpam = require("kahoot-spam")
const Discord = require("discord.js");
const client = new Discord.Client();
const kahoot = require("kahoot-spam");
const { spam } = require('kahoot-spam');
const KahootSpam = require('kahoot-spam');
const talkedRecently = new Set();

client.on("ready", () => {
  console.log("Flood Ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!flood")) {
    if (talkedRecently.has(message.author.id)) {
      message.channel.send('Wait 1 minute before getting typing this again. - ${message.author}');
    } else {
    for (i = 0; i < 3; i++) {
      let api = KahootSpam
      var pin = (message.content.replace('!flood ', ''));
      api.spamWithAnswers(pin, "Fuck", 40, 100)
    }
        console.log(message.author);
        const embed = new MessageEmbed();
        embed.setTitle("Kahoot Flooder");
        embed.setColor("#00ffff");
        embed.setDescription("Flooding Kahoot game " + (message.content.replace('!flood ', '')));
        message.channel.send(embed);
        console.clear()
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author);
        }, 60000);
        }
    }

  });

client.login(process.env.BOT_TOKEN);
