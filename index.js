const {Client, MessageEmbed} = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();
var membercount = 0
const sq = require('./flood');
const kahoot = require("kahoot-spam")

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!help")) {
        const embed = new MessageEmbed();
        embed.setTitle("Kahoot Bot");
        embed.setColor("#00ffff");
        embed.setDescription("Use !bot (Game pin goes here) to load any Kahoot game! \n Use !info to find out more details about the bot and it's development!");
        message.channel.send(embed);
    };
  });



  client.on("message", (message) => {
    if (message.content.startsWith("!help")) {
          const embed = new MessageEmbed();
          embed.setTitle("Kahoot Bot Info");
          embed.setColor("#00ffff");
          embed.setDescription("Thanks for inviting KahootBot to your discord server. \n This bot is run and developed by LeeBear#2812 \n This bot is also still in development so their may be outages or decreases in performance at times. \n This bot provides a free service to allow you to join games with multiple accounts LeeBear#2812 is not responsible for anything you do with \n the free service that has been provided");
          message.channel.send(embed);
      }
    });


client.on("ready", () => {
  console.log("Prefix: !");
  console.log("Server count: " + client.guilds.cache.size);
  console.log("Total User Count: " + client.users.cache.size + "\n");
  console.log("Servers:");
  client.guilds.cache.forEach(guild => {
    console.log(
      "|    - " +
        guild.id +
        " | " +
        guild.name +
        " | Member Count: " +
        guild.memberCount
    );
    membercount = membercount + guild.memberCount;
  });
  client.user.setStatus('dnd')
  client.user.setPresence({ activity: { name: `in chat for ${membercount} users and ${client.guilds.cache.size} servers. Type !help.` }, status: 'dnd', type: 'WATCHING' })
  setInterval(() => {
    client.user.setPresence({ activity: { name: `in chat for ${membercount} users and ${client.guilds.cache.size} servers. Type !help.` }, status: 'dnd', type: 'WATCHING' })
  }, 900000);
});


//Updates discord bots status
client.on("message", (message) => {
    if (message.content.startsWith("!statusupdate")) {
  var membercount = 0
  console.log("Prefix: !");
  console.log("Server count: " + client.guilds.cache.size);
  console.log("Total User Count: " + client.users.cache.size + "\n");
  console.log("Servers:");
  client.guilds.cache.forEach(guild => {
    console.log(
      "|    - " +
        guild.id +
        " | " +
        guild.name +
        " | Member Count: " +
        guild.memberCount
    );
    membercount = membercount + guild.memberCount;
  });
  client.user.setStatus('dnd')
  client.user.setPresence({ activity: { name: `in chat for ${membercount} users and ${client.guilds.cache.size} servers. Type !help.` }, status: 'dnd', type: 'WATCHING' })
  setInterval(() => {
    client.user.setPresence({ activity: { name: `in chat for ${membercount} users and ${client.guilds.cache.size} servers. Type !help.` }, status: 'dnd', type: 'WATCHING' })
  }, 900000);
  const embed = new MessageEmbed();
  embed.setTitle("Kahoot Flooder Owner Command");
  embed.setColor("#00ffff");
  embed.setDescription("Updating Status");
  message.channel.send(embed);
}
});


client.login(process.env.BOT_TOKEN);
