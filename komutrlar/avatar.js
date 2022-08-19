const Discord = require('discord.js');//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
exports.run = (client, message, args) => { //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

         
        talkedRecently.add(message.author.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let mention = message.mentions.users.first();//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.author.username;
} else {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.channel.guild.member(message.author).nickname;//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
if (mention != null || mention != undefined) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    name = mention.username + "' ";//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
  const avatarEmbedOther = new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(mention.username, mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setImage(mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedOther);
  return;//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(sender,message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedYou);
  return;
} //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
message.channel.send("Render Hatası Yada Bilinmeyen Bir Hata Oldu.");
} //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'avatar',
  isim: 'Avatar',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  süre: 'Yok',
  description: 'Avatarınızı Gösterir Veya Birini Etiketlerseniz Kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};