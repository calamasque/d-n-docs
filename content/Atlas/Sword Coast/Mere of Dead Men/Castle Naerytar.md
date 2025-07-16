---
title: Castle Naerytar
publish: true
aliases: 
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
image: 
date: 2025-07-14
last_modified: 2025-07-14
tags: 
---
# Castle Naerytar
```dataview

table file.link, file.path
from "content/Adventures"

```
## Featured
```dataview

TABLE 
	WITHOUT ID
	session_num AS "Sessie", 
	link(file.link,title) AS "Avontuur", 
	session_date AS "Datum"
FROM 
	"content/Adventures"
WHERE 
	contains(location, this.file.name) or 
	contains(location, link(this.file.name))
SORT 
	session_num ASC

```
## People
```dataview

TABLE 
	faction as Faction, 
	description as Description 
FROM 
	"content/Characters"
WHERE 
	contains(type, "NPC") AND 
	(contains(location, this.file.name) OR contains(location, link(this.file.name)))
SORT 
	file.name ASC

```
