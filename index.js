const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("windows")) {
    message.channel.send("brule cet os dans les flammes de l'enfer");
  }
});

client.login(
  "OTg2MzM3MzIzODcwNDc0MjYw.G0Ry3M.vRh8dD9CssgCJ0f4XPTKTrTnYZ6xifWRaQzO0A"
);
