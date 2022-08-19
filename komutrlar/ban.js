const Discord = require("discord.js");//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!message.member.hasPermission("BAN_MEMBERS")) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    const embed = new Discord.MessageEmbed()
      .setDescription(":x: ``Bu komutu kullanabilmek için Üyeleri Yasakla yetkisine sahip olmalısın!``")
      .setColor("BLACK");
 
    message.channel.send(embed);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    return;
  }
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let u = message.mentions.users.first();//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setDescription(" Lütfen banlanacak kişiyi etiketleyiniz!")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.channel.send(
          `:ok_hand:  İşlem onaylandı! şahıs sunucudan banlandı!`
        );
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.guild.member(u).ban();
      }//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
   
  
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
module.exports.conf = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],
  permLevel: 0,
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: "moderasyon"//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
module.exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: "ban",//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: "kick",//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: "ban"//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};