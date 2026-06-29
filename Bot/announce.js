require("dotenv").config();
const notion = require("./notion");

module.exports = async function announce(client) {
  const entries = await notion.getEntries();

  const today = `${new Date().getDate()}/${new Date().getMonth() + 1}`;
  //giving DD/MM/YYYY / +1 as first Month is 0-indexed
  const channel = await client.channels.fetch(process.env.ANNOUNCE_CHANNEL_ID);
  //converting channel id to smt which discord.js can use

  for (const entry of entries) {
    if (entry.bdate === today || entry.bdate.startsWith(today + "/")) {
      //checking the entry's birthday matches today's date DD/MM === DD/MM/YYYY
      //Importance to DD/MM as its "StartsWith"
      await channel.send(
        `@everyone today is <@${entry.discordId}>'s birthday! 🎉 🎂`,
      );
    }
  }
};
