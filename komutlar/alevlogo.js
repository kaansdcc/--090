const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);
        setTimeout(() => {
     //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        }, 3000);
    } //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const yazi = args.slice(0).join('+'); //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :envelope: `)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setImage(linqo)
  .setFooter('Alevli Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {
    name: 'alev',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    description: 'Yazdığınız yazıyı bannera çevirir.',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    usage: 'alev <yazı>'
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
