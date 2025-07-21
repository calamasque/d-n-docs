---
title: Waterdeep
publish: true
aliases: 
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
locationType: city
leaders: 
- "[[Lord Neverember]]"
- "[[The masked lords]]"
image: 
date: 2025-07-15
last_modified: 2025-07-14
tags: 
---
# Waterdeep

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
