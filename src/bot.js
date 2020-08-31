require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
