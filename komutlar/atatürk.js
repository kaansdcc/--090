const Discord = require('discord.js');//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
         //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);
    } //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5