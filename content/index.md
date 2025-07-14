---
title: Welkom to the adventures of Metatron
publish: true
---
## Adventures in dataviewJS
```dataviewjs
for (let group of dv.pages('"content/Adventures"').where(p => p.type === "session").groupBy(c => c.campaign)) {
	dv.header(3,group.key);
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
	link(file.link,title) AS "Name", 
	session_num AS "Sessie",
	date AS "Datum"

FROM "content/Adventures"

WHERE 
	type = "session"
SORT session_num ASC
```

The end.
