const config = require('./config/config.js');
const { Client } = require('discord.js');
const bot = new Client();

var desired_word = ['h','e','l','l','o'];
var input_letters = [];

bot.login(config.token);

bot.on('ready', () => {
  console.log(`Bot is ready as ${bot.user.tag}`);
});

bot.on('message', async (message) => {
  if(message.content == '!! clear'){
    const fetched = await message.channel.fetchMessages({limit: 100});
    message.channel.bulkDelete(fetched);
  }else{
    let reg = new RegExp('.. .');
    console.log(message.content + '  ' + reg.test(message.content.toString()));
    if(reg.test(message.content.toString())){
      message.delete();
      message.reply(message.author);
    }
  }
  /*if(message.content == '!! hello'){
    message.channel.send(`hello ${message.author}`);
  }*/

});


function newWord(){
  //buscar palabra random segun dificultad
  let word = [];
  desired_word = word;
}
