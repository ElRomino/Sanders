const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setGame("Command: +aide");
    console.log("Connectedç")
});

bot.login('NTQyMDI1MzU4MjMzNDM2MTYx.DzoB1Q.k15Az49Gj_J1aqk96jA8e7zWVpU')
