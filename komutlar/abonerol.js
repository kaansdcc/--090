let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,
  aliases: ['abone-rol'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'abonerol'
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.play = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonerol @rol',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  açıklama: 'Abone Rolünü Ayarlarsınız',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
