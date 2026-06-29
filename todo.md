# Birthday Bot — Build Order

```
birthday-bot/
├── .env                  (real secrets, never committed)
├── .env.example           (same keys, empty — safe to commit)
├── .gitignore
├── package.json
└── src/
    ├── index.js
    ├── birthday.js
    └── notion/
        └── client.js
```

Pure build steps only, top to bottom. Find the first unchecked box — that's next.

- [x] 1. Create the folders/files above, run `npm install`
- [x] 2. Fill `.env`: `DISCORD_TOKEN`, `NOTION_TOKEN`, `NOTION_DATABASE_ID`, `NOTION_DATA_SOURCE_ID`
- [x] 3. **index.js** — import dotenv, discord.js, birthday.js
- [x] 4. **index.js** — create the Discord client with intents
- [x] 5. **index.js** — add `ready` event
- [x] 6. **index.js** — add `messageCreate` event, calling `birthday(client, message)`
- [x] 7. **index.js** — `client.login()`
- [x] 8. **notion/client.js** — import `@notionhq/client`, create the connection
- [ ] 9. **notion/client.js** — write `findByDiscordId`
- [ ] 10. **notion/client.js** — write `createEntry`
- [ ] 11. **notion/client.js** — write `updateEntry`
- [ ] 12. **notion/client.js** — export all three functions
- [ ] 13. **birthday.js** — import `notion/client.js`
- [ ] 14. **birthday.js** — ignore bot messages, check `!bday` prefix
- [ ] 15. **birthday.js** — strip prefix, parse day/month, validate
- [ ] 16. **birthday.js** — call `findByDiscordId`, branch to update or create
- [ ] 17. **birthday.js** — react 👍 on success / 👎 on failure
- [ ] 18. Test: run `!bday 08/06`, confirm row in Notion + 👍
- [ ] 19. Test: re-run with a different date, confirm it updates, not duplicates
- [ ] 20. Test: bad input like `!bday 45/13`, confirm 👎 + nothing written

---
## Parked — after everything above works
- [ ] 21. Decide scheduling approach
- [ ] 22. Write the check-today's-birthdays + announce logic
- [ ] 23. Show TS members, get feedback
- [ ] 24. Move `birthday.js` + `notion/client.js` into the real `link-shorten` repo
