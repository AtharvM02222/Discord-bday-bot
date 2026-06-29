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

//testing
bot.on("messageCreate", async (message) => {
  if (message.content !== "!announce") return;
  try {
    await announce(bot);
    message.react("1468579576895766578");
  } catch (galat_bat) {
    console.error(galat_bat);
    message.react("👎");
  }
});

bot.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "ping") {
    message.reply("pong");
    message.react("1468579576895766578");
  }
});

bot.login(process.env.TOKEN);
