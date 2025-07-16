---
title: Characters
publish: true
---
## DataviewJS
```dataviewjs
for (let group of dv.pages('"content/Characters"').where(p => p.type === "NPC").groupBy(c => c.campaign)) {
	dv.table(["NPC","Locatie"],
	group.rows
		.where(p => p.type === "NPC")
		.sort(p => p.title)
		.map(p => [p.file.link,p.location]))
}
```
## Dataview
```dataview

TABLE WITHOUT ID

flattenedLocation AS "Location",

join(rows.file.link, ", ") AS "NPCs"

FROM "content/Characters"

WHERE type = "NPC" and location

FLATTEN location AS flattenedLocation

GROUP BY flattenedLocation

```

