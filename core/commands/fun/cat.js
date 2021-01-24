const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

exports.launch = (client, message, args, lang) => {
  fetch("https://some-random-api.ml/img/cat")
  .then(res => res.json())
  .then(body => {
    if(!body) return;

    const embed = new MessageEmbed()
      .setColor(0x2F3136)
      .setDescription(`🐱 **${message.author.username}**, ${lang.heresacat}`)
      .setImage(body.link)
      .setTimestamp()
      .setFooter("gokium", client.user.displayAvatarURL({format: "png" || "gif"}));

    return message.channel.send(embed);
  })
}