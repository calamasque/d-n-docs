---
title: index
publish: true
---

## NPCs in dataviewJS
```dataviewjs
const allNPCs = dv.pages('"content/Characters"')
    .where(p => p.type === "NPC" && p.location);

const locationMap = new Map();

// Flatten and group NPCs by each location
for (let npc of allNPCs) {
    const locations = Array.isArray(npc.location) ? npc.location : [npc.location];
    for (let loc of locations) {
        if (!locationMap.has(loc)) locationMap.set(loc, []);
        locationMap.get(loc).push(npc);
    }
}

// Sort by location name
const sortedLocations = Array.from(locationMap.keys()).sort();

for (let loc of sortedLocations) {
    dv.header(3, loc);
    const npcs = locationMap.get(loc).sort((a, b) => a.title.localeCompare(b.title));
    dv.table(["NPC", "Beschrijving"],
        npcs.map(p => [dv.fileLink(p.file.path, false, [p.title]), p.description])
    );
}
```

## NPCs in Dataview
```dataview
TABLE 
	WITHOUT ID
	link(file.link,title) AS "NPC", 
	description AS "Beschrijving"

FROM "content/Characters"

WHERE 
	type = "NPC"
SORT title ASC
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
	session_num AS "Sessie",
	link(file.link,title) AS "Avontuur", 
	date AS "Datum"

FROM "content/Adventures"

WHERE 
	type = "session"
SORT session_num ASC
```

The end.
