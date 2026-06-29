require("dotenv").config();
const { Client } = require("@notionhq/client");

//https://ripe-jackfruit-476.notion.site/38efc2bedce480b98d4efb603e92b8ef?v=38efc2bedce48083955d000cd261178f&source=copy_link

const notion = new Client({
  auth: process.env.NOTION_API,
});

/*
(async () => {
  const result = await notion.databases.retrieve({ database_id: "38efc2bedce480b98d4efb603e92b8ef" });
  console.log(result.data_sources);
})();
*/

async function createEntry(discordId, bdate) {
  await notion.pages.create({
    parent: {
      type: "data_source_id",
      data_source_id: process.env.NOTION_DATA_SOURCE_ID,
    },
    properties: {
      discordid: { title: [{ text: { content: discordId } }] },
      bdate: { rich_text: [{ text: { content: bdate } }] },
    },
  });
}

async function getEntries() {
  const result = await notion.databases.query({
    database_id: process.env.NOTION_DATA_SOURCE_ID,
  });
  return result.results;
  // why is it result.results, mujhe nahi pta
}

async function updateEntry(discordId, bdate) {
  //kya karu should we delete and then create a new entry
  // or should we update the existing entry from checking the userid
  return pass;
}

module.exports = { createEntry, getEntries, updateEntry };
