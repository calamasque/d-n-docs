---
title: Baldur's Gate
publish: true
aliases:
  - Baldur's Gate
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
locationType: city
leaders: 
image: 
date: 2025-07-15
last_modified: 2025-07-14
tags:
---
# Baldur's Gate
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
FLATTEN faction
WHERE 
	contains(type, "NPC") AND 
	(contains(location, this.file.name) OR contains(location, link(this.file.name)))
SORT 
	file.name ASC

```
