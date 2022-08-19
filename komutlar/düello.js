const Discord = require('discord.js');
const talkedRecently = new Set();
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
exports.run = async (client, message, args) => {
 if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
       //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

          talkedRecently.delete(message.author.id);
        }, 3000);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } 
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
	if (!opponent) return message.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (opponent.bot) return message.reply('Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile düello Atamazsın');
		if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
		try {
			if (!opponent.bot) {
                await message.channel.send(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
				const verification = await verify(message.channel, opponent);
				if (!verification) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
					this.fighting.delete(message.channel.id);
					return message.channel.send(`Düello kabul edilmedi...`);
				}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
			}
			let userHP = 500;//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
					await message.channel.send(`${user}, kendisini süper kalkan ile savundu!`);
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ulta güç kullanamadın!`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`${user}, kaçtı! Korkak!`);
					forfeit();
					break;
				} else {
					await message.reply('Ne yapmak istediğini anlamadım.');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
			return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }
exports.conf = {
  enabled: true,
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['1vs1', '1v1', 'savaş','düello'],
  permLevel: `Yetki gerekmiyor.`
};
exports.help = {
  name: 'duello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'duello <@kullanıcı>'
};
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5