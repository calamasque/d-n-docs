---
title: Sea of Swords
publish: true
aliases:
  - Sea of Swords
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
locationType: sea
leaders: 
image: 
date: 2025-07-15
last_modified: 2025-07-14
tags:
---
# Sea of Swords
## Featured
```dataview
list
FROM "content/Adventures"
WHERE contains(location, this.file.name) or contains(location, link(this.file.name))
SORT file.name DESC
```
## People
```dataview
table faction as Faction, description as Description
WHERE contains(type, "NPC") and (contains(location, this.file.name) or contains(location, link(this.file.name)))
SORT file.name ASC
```
