const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  

  var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")




  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz.");
  
  let bayrak = db.fetch(`Asreaperbayrak_${user.id}`) || `Ayarlanmamış` 
  let cinsiyet = db.fetch(`AsreaperCinsiyet_${user.id}`) || `Ayarlanmamış`
  let isim = db.fetch(`Asreaperİsim_${user.id}`) || `Ayarlanmamış`
  let soyisim = db.fetch(`AsreaperSoyisim_${user.id}`) || `Ayarlanmamış`
  let yas = db.fetch(`AsreaperYas_${user.id}`) || `Ayarlanmamış`
  
  
const Asreaper = new Discord.MessageEmbed()

.setColor("#ff0000")
.setAuthor(`${isim} ${soyisim} Adlı kişinin profili aşağıda bulunuyor.`)
.setThumbnail(user.avatarURL())
.setDescription(`


║══════════════════════
**Son Mesaj İD: ** ${message.author.lastMessageID}
║══════════════════════
**Oynadığı Oyun: ** ${message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor'}
║══════════════════════
**Son Mesaj: ** ${message.author.lastMessage}
║══════════════════════
**Bot mu?** ${message.author.bot ? ':white_check_mark:' : ':negative_squared_cross_mark:'}
║══════════════════════
**Roller: ** ${message.guild.members.cache.get(message.author.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ')}
║══════════════════════
**Oluşturulduğu Tarih: ** ${(`${moment(message.author.createdAt).format('DD')} ${aylar[moment(message.author.createdAt).format('MM')]} ${moment(message.author.createdAt).format('YYYY HH:mm:ss')}`)}
`)

return message.channel.send(Asreaper);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profil",
  description: "profil",
  usage: "profil",
  kategori: "Profil"
};