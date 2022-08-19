let Discord = require("discord.js")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let database = require("quick.db")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let ayarlar = require("../ayarlar.json")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış! Ayarlamak İçin r!abone-rol @Rol`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış! Ayarlamak İçin r!abone-log #kanalismi`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış! Ayarlamak İçin r!abone-y-rol @rol`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  await(abonekisi.roles.remove(abonerol))
  message.channel.send(`Kullanıcıdan abone rolünü başarıyla aldın :white_check_mark: `)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Alındı!`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolünü Alan Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolü Alınan   Kişi`, `${user}`, true)
  .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor(`BLUE`)
  .setFooter(`${client.user.username} Abone Sistemi`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.guild.channels.cache.get(abonelog).send(embed)
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abonesil'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'asil'
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}

