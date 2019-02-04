const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setGame("Command: +aide");
    console.log("Connectedç")
});

bot.login('et non')
