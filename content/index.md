---
title: index
publish: true
tags:
  - dataview-publisher
---
Blub.
# Adventures in dataviewJS
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
	session_num AS "Sessie",
	link(file.link,title) AS "Avontuur", 
	date AS "Datum"

FROM "content/Adventures"

WHERE 
	type = "session"
SORT session_num ASC
```

The end.
