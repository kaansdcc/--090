let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  database.set(`abonelog.${message.guild.id}`, log.id)//Rache Code , Telif Hakları//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5 Vardır, https://discord.gg/mMMpTt5
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['abone-log'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
  name: 'abonelog'
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5