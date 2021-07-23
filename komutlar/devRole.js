const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
let mentionRole = message.mentions.roles.first();
  db.set(`devRole.${message.guild.id}`, mentionRole.id);
 message.channel.send(new Discord.MessageEmbed()
  .setAuthor("feezy",client.user.avatarURL())
  .setColor("#f8f8f9")
  .setDescription(`**<a:tenor:807201675738611800> | Dev rol başarıyla ${mentionRole} olarak ayarlandı**`)
  .setFooter("Tüm Hakları Saklıdır."))
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'devRole',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}
