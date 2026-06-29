# Birthday Bot - Todo

## notion.js
- [ ] fix `getEntries()` — change `notion.databases.query` to `notion.dataSources.query` and `database_id` to `data_source_id` (v5 api change)
- [ ] fix `getEntries()` — map results to clean `{ pageId, discordId, bdate }` objects instead of returning raw notion pages
- [ ] fix `updateEntry()` — query entries, find page by discordId, call `notion.pages.update` with new bdate (remove the broken `return pass`)

## birthday.js
- [ ] rename `bdate` var to `cmd` to handle multiple subcommands
- [ ] add `!bday list` — fetch all entries, reply with an EmbedBuilder (pink, 🎂 title, one line per user: `<@discordId> — date`)
- [ ] add `!bday update <date>` — call `notion.updateEntry`, react 👍 on success, reply "not found" if user has no entry

## announce.js
- [ ] fetch all entries via `notion.getEntries()`
- [ ] parse each bdate (format: DD/MM), check if day+month matches today
- [ ] fetch announce channel using `client.channels.fetch(process.env.ANNOUNCE_CHANNEL_ID)`
- [ ] send `🎉 @everyone, today is <@discordId>'s birthday!` for each match
- [ ] export as a function that takes `client` as argument

## index.js
- [ ] uncomment the cron job so announce runs every day at 9am IST
