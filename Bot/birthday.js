const notion = require("./notion");

const PREFIX = "!bday ";

module.exports = async function (message) {
  if (!message.content.startsWith(PREFIX)) return;
  if (message.author.bot) return;

  const bdate = message.content.slice(6).trim();
  const userid = message.author.id;

  try {
    const updated = await notion.updateEntry(userid, bdate);
    if (!updated) await notion.createEntry(userid, bdate);
    message.react("1468579576895766578");
    //for ts we will use this emoji :ts:
  } catch (galat_bat) {
    console.error(galat_bat);
    message.react("👎");
  }
};
