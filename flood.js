const {Client, MessageEmbed} = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();
const api = require('kahoot.js-updated')

client.on("ready", () => {
  console.log("Flood Ready!");
}); 

client.on("message", (message) => {
  if (message.content.startsWith("!flood")) {
    if (talkedRecently.has(message.author.id)) {
      message.channel.send('Wait 1 minute before getting typing this again.');
    } else {
    for (i = 0; i < 3; i++) {
      let api = KahootSpam
      var pin = (message.content.replace('!flood ', ''));
      api.spamWithAnswers(pin, "Fuck", 40, 1)
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

  //test
  //const api = require('../t/node_modules/kahoot.js-updated')
  
  var express = require('express');  
  var app = new express();
  
  async function sleep(m) {
      return new Promise(resolve => setTimeout(resolve, m));
  }
  
  
  var i;
  var id = 0;
  var errnum = 0;
  class KahootSpam {
      static async spam(pin, name, amout){
          if(!pin) throw new TypeError('Please Give Me A Pin')
          if(!Number(pin)) throw new TypeError('Please Use A Number For The Pin')
          if(!name) throw new TypeError('Please Give Me A Name')
          if(Number(name)) throw new TypeError('Please Use A String For The Name')
          if(!amout) throw new TypeError('Please Give Me An Amout')
          if(!Number(amout)) throw new TypeError('Please Use A Number For The Amout')
          
          console.log('Ok Joining...')
          try{
              for(i = 0; i < amout; i++){
  
                  id = id + 1
                  var bot = new api;
                  bot.join(pin, `${name}${id}`)
                  bot.on("joined", () => {
                      console.log(`Bot ${name}${id} has successfully joined game ${pin}`)
                  })
              }
  
          } catch (err){
              errnum = errnum + 1
              throw new TypeError(`Um Something Went Wrong With This Bot\n err num ${errnum}`)
          }
  
      }
  
      static async spamWithAnswers(pin, name, amout, slee){
          if(!pin) throw new TypeError('Please Give Me A Pin')
          if(!Number(pin)) throw new TypeError('Please Use A Number For The Pin')
          if(!name) throw new TypeError('Please Give Me A Name')
          if(Number(name)) throw new TypeError('Please Use A String For The Name')
          if(!amout) throw new TypeError('Please Give Me An Amout')
          if(!Number(amout)) throw new TypeError('Please Use A Number For The Amout')
          if(!slee) throw new TypeError('Please Give Me How Long To Sleep In Mili Seconds')
          if(!Number(slee)) throw new TypeError('Please Use A Number For The Sleep Time')
          console.log('Ok Joining...')
          try{
              for(i = 0; i < amout; i++){
  
                  id = id + 1
                  var bot = new api;
                  bot.join(pin, `${name}${id}`)
                  bot.on("joined", () => {
                      console.log(`Bot ${name}${id} has successfully joined game ${pin}`)
                  })
                  bot.on("QuestionStart", question => {
                      if(slee == 2){
                          let time = Math.floor(Math.random() * 10000);
                          setTimeout(() => {
                              let answer = Math.floor(Math.random() * 4);
                              question.answer(answer);
                          }, time);
                      }else if(slee == 1){
                          let answer = Math.floor(Math.random() * 4);
                          question.answer(answer);
                      }else{
                          throw new TypeError ('You need to have "true2" or "false1" for if you want to sleep')
                      }
                  });
              }
          } catch(err){
              errnum = errnum + 1
              throw new TypeError (`Um Something Went Wrong With This Bot\n err num ${errnum}`)
          }
  
      }
      
      
  
      
  
  }
  
  
  
  module.exports = KahootSpam;


client.login(process.env.BOT_TOKEN);
