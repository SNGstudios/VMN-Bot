const { Client, IntentsBitField} = require("discord.js");

const client = new Client(
{
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.login("MTEzODQwMjA2NzIyNDk4NTYwMg.GOvlwk.eARQarioRAwS07E8nqHDfx419nJrk2Ls7sFoCc");

