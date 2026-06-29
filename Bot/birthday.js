const notion = require("./notion");

const PREFIX = "!bday ";

module.exports = async function (message) {
  if (!message.content.startsWith(PREFIX)) return;
  if (message.author.bot) return;

  const bdate = message.content.slice(6).trim();
  const userid = message.author.id;

  await notion.createEntry(userid, bdate);
  message.react("👍");
  //for ts we will use this emoji :ts:
};
