const { Client, IntentsBitField } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

const client = new Client(
  {
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMessageReactions,
    ],
  });

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online.`)
})

client.on('messageCreate', (message) => {
    var date = new Date();
    var datum = date.getUTCDate().toString() + "." + date.getUTCMonth().toString() + "." + date.getUTCFullYear().toString();
    var cas = date.getUTCHours().toString() + ":" + "mesic" + ":" + date.getUTCSeconds().toString();
    var fulltime = datum + " " + cas;
  const newdata = "\n" + fulltime + "#" + message.channel.name + " " +  message.author.globalName + " : " + message.content;

  var fs = require('fs')
fs.appendFile('log.txt', newdata, function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})
  console.log(newdata);
  if (!message.author.bot) {
    if (message.content === "Jaká je IP?" || message.content === "Jaká je ip?") {
      message.reply("IP Serveru je: brz-de69-fr1.cortexnodes.com:26136 Ale server ještě není funkční!!!")
    }
    if (message.content === "vm!") {
      message.reply("Dostupné příkazy: vm!clearlog")
    }
    if (message.content === "vm!help") {
      message.reply("Dostupné příkazy: vm!clearlog")
    }
    if (message.content === "vm!clearlog"){
      if(message.member.roles.cache.find(r => r.name === "Full-Access"))
      {
        message.reply(":alarm_clock:Čistím log...:alarm_clock:");
        const fs = require('fs')

let cleardata = "Data cleared at: " + fulltime + " by: " + message.author.globalName
fs.writeFile('log.txt', cleardata, (err) => {
 if (err) throw err;
});
      message.reply(":white_check_mark:Log vyčištěn!:white_check_mark:")
      }
      else{
        message.reply(":x:Nemáš dostatečné oprávnění!:x:");
      }
    }
    else if(message.content === "vm!version" || message.content === "vm!verze"){
      const versionembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('VM - Network Discord Bot')
	.setURL('https://vmnet.9e.cz/projects/vmnet-ds-bot')
	.setAuthor({ name: 'VM - Network', iconURL: 'https://cdn.discordapp.com/avatars/1138402067224985602/8e8e9fb5b4262528ac2edb3762c6ade1.png?size=4096', url: 'https://vmnet.9e.cz' })
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Jméno', value: 'VM - Network#8193 ' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Verze', value: 'Beta 0.2.6', inline: true },
		{ name: 'Source-Code', value: 'https://vmnet.9e.cz/projects/vmnet-ds-bot/src ', inline: true },
	)
	.setTimestamp()

message.channel.send({ embeds: [versionembed] });
    }
  }
})

client.on("messageDelete", (message) =>{
  var date = new Date();
    var datum = date.getUTCDate().toString() + "." + date.getUTCMonth().toString() + "." + date.getUTCFullYear().toString();
    var cas = date.getUTCHours().toString() + ":" + "mesic" + ":" + date.getUTCSeconds().toString();
    var fulltime = datum + " " + cas;
  const newdata = "\n" + "/#Deleted Message#/" + fulltime + "#" + message.channel.name + " " +  message.author.globalName + " : " + message.content;
  var fs = require('fs')
fs.appendFile('log.txt', newdata, function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})

})


client.login("INSERT_TOKEN_HERE");
