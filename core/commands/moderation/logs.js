const db = require('quick.db');

exports.launch = (client, message, args, lang) => {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
  
  const logsChannel = args[0].replace(/<|#|>/g, '');
  if (!logsChannel) {
    if (db.get(`logs_${message.guild.id}`)) {
      message.delete().then(() => {
        db.delete(`logs_${message.guild.id}`);
        message.reply(lang.deactivated).then(msg => msg.delete({ timeout: 3000 }));
      });
    }

    return;
  }

  if (!message.guild.channels.cache.has(logsChannel)) return message.reply(lang.channeldoesntexist);

  db.set(`logs_${message.guild.id}`, logsChannel);
  return message.delete().then(() => message.reply(`${lang.activated} **<#${logsChannel}>** !`).then(msg => { msg.delete({ timeout: 3000 })}));
}