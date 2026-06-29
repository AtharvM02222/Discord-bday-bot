require("dotenv").config();
const { Client } = require("@notionhq/client");
//https://ripe-jackfruit-476.notion.site/38efc2bedce480b98d4efb603e92b8ef?v=38efc2bedce48083955d000cd261178f&source=copy_link
const notion = new Client({
  auth: process.env.NOTION_API,
});
