require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const birthday = require("./birthday");
const cron = require("node-cron");
const announce = require("./announce");

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

bot.on("messageCreate", birthday);
cron.schedule("0 9 * * *", () => announce(bot), { timezone: "Asia/Kolkata" });

bot.login(process.env.TOKEN);

bot.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "ping") {
    message.reply("pong");
    message.react("👍");
  }
});
