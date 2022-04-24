const TelegramBot = require('node-telegram-bot-api');
const Telegraf = require('telegraf');
require ('dotenv').config();

const TOKEN = '5378551474:AAFVeQhjkDz4HEdvX7egsHFX4YKTI0YWORM';
//const bot = new Telegraf(TOKEN)
const bot = new TelegramBot(TOKEN, {polling: true});


  bot.start((ctx) => {
      ctx.reply('Welcome to Stock Market College')
  });
  
  bot.command('covid',(ctx) =>{
  ctx.telegram.sendMessage(ctx.chat.id, 'covide stats',
  {
      reply_markup: {
  inline_keyboard:[
      [{text:'Financial Markets Education', url:'app.stockmarketcollege.com' },{text:'Tools for the Smart Trader', url:'app.stockmarketcollege.com'}],
  
  ]
      }
  });
  });
  
  bot.launch();
  