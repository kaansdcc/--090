const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`RTX BOT | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek sunucum için tıkla](https://discord.gg/hv8sz3c)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Genel**', '`at`, `oylama`, `reboot`, `ban`, `banlist`, `duyuru`, `çekiliş`, `isim`, `fakemesaj`, `uyarı`, `sabitle`, `partner`, `botkontrol`, `sustur`, `susturaç`, `küfürengel`')
      .addField('**Gerekli Komutlar**', '`otorol-sistemi`, `sayaç-sistemi`, `kayıt-sistemi`, `seviye-sistemi`, `sunucu-sistemi`')
      .addField('**Diğer**', '`sunucu-kurulum`, `herkesten-rol-al`, `herkese-rol-ver`, `unbanall`, `serverpanel`, `serverpanelkaldır`')
      .addField('**Sunucu Komutları**', '`ses-kanal-aç`, `kanal-açıklama`, `rol-liste`, `temizle`, `yaz`, `mesajat`, `güvenlik`, `rol-koruma`, `kanal-koruma`, `hgbbkanalayarla`, `reklam-engelleme`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};