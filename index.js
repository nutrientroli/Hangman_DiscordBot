const config = require('./config/config.js');
const { Client } = require('discord.js');
const bot = new Client();


bot.login(config.token);

bot.on('ready', () => {
  console.log(`Bot is ready as ${bot.user.tag}`);
});

bot.on('message', async (message) => {
  if(message.content == '!nutrient ping'){
    message.delete();
    message.reply('pong');
  }
  if(message.content == '!nutrient hello'){
    message.channel.send(`hello ${message.author}`);
  }
  if(message.content == '!nutrient clear'){
    const fetched = await message.channel.fetchMessages({limit: 100});
    message.channel.bulkDelete(fetched);
  }
});
