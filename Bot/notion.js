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
  const result = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATA_SOURCE_ID,
  });

  return result.results.map((entry) => ({
    discordId: entry.properties.discordid.title[0].plain_text,
    bdate: entry.properties.bdate.rich_text[0].plain_text,
  }));
}

async function updateEntry(discordId, bdate) {
  const result = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATA_SOURCE_ID,
    filter: { property: "discordid", title: { equals: discordId } },
  });

  if (result.results.length === 0) return false;

  await notion.pages.update({
    page_id: result.results[0].id,
    properties: {
      bdate: { rich_text: [{ text: { content: bdate } }] },
    },
  });

  return true;
}

module.exports = { createEntry, getEntries, updateEntry };
