---
title: wrak van The Marshall
publish: true
aliases: 
  - gezonken schip van Tyr
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
image: 
date: 2025-07-15
last_modified: 2025-07-14
tags: 
---
# wrak van The Marshall

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
