---
title: Adventures
publish: true
aliases: 
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: index
tags: 
image: 
date: 2025-07-16
last_modified: 2025-07-16
---
# Adventures

## Last week on Dungeons & Detectives
```dataview
TABLE
	WITHOUT ID
	description AS Description
FROM "content/Adventures"
WHERE type = "session" AND publish = true
SORT session_num DESC
LIMIT 1
```

## Adventures in dataviewJS
```dataviewjs
for (let group of dv.pages('"content/Adventures"').where(p => p.type === "session").groupBy(c => c.campaign)) {
	dv.table(["Sessie","Avontuur","Datum"],
	group.rows
		.where(p => p.type === "session")
		.sort(p => p.session_num)
		.map(p => [p.session_num,dv.fileLink(p.file.path,false,[p.title]),p.date]))
}
```

## Adventures in Dataview
```dataview
TABLE 
	WITHOUT ID
	session_num AS Sessie,
	link(file.link,title) AS Avontuur
FROM "content/Adventures"
WHERE type = "session"
SORT session_num ASC
```
