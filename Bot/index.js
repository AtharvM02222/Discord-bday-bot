require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const birthday = require("./birthday");

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

bot.once("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
});

bot.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "ping") {
    message.reply("pong");
    message.react("👍");
  }
});

bot.on("messageCreate", birthday);

bot.login(process.env.TOKEN);
