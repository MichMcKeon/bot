const TelegramBot = require('node-telegram-bot-api')
const token = '5319740178:AAGjmBJSOewm_6AXiAkkaV_pHACL0qKrBwY'
const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', function(msg) {
    console.log('Received Message',msg);
    const res = `Hi ${msg.from.first_name}..... Message received`;
    bot.sendMessage(msg.chat.id,res);
});

bot.onText(/\/echo (.+)/,function(msg,match) {
    console.log('received echo request');
    console.log(match);
    const res= 'received echo';
    bot.sendMessage(msg.chat.id,res);
});


