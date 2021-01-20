const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');

exports.launch = (client, message, args) => {
  fetch("https://some-random-api.ml/img/racoon")
  .then(res => res.json())
  .then(body => {
    if(!body) return message.reply("Impossible de get le `body`");

    const embed = new MessageEmbed()
      .setColor(0x2F3136)
      .setDescription(`🦝 **${message.author.username}**, voici un raton pour toi !`)
      .setImage(body.link)
      .setTimestamp()
      .setFooter("Gokium", client.user.displayAvatarURL({format: "png" || "gif"}));

    return message.channel.send(embed);
  })
}

exports.commands = {
  description: "Envoie une photo de racoon.",
  use: "racoon"
}