 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Benita Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:762263473211310119> Benita botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partner:764740104534491148> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:setting:762263468002770964> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:762263473211310119> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:partner:764740104534491148> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:762263468002770964> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:762263473211310119> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:762263473211310119> \`${prefix}davet\` | Benita'yı Sunucunuza Davet Edersiniz\n<a:hypesquad1:762263473211310119> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/751476672074743859/762278430724325376/benitaaaa.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}