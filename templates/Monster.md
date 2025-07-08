---
title: <% tp.file.title %>
publish: true
aliases: 
description: 
type:
  - Monster
world:
  - Forgotten Realms
campaign:
  - Dungeons & Detectives
encounter: 
game_date: 1489 DR
tags: 
image: 
date: <% tp.date.now("YYYY-MM-DD") %>
last_modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Monster summary
* 

## Featured
```dataview
list
FROM "content/Adventures"
WHERE contains(Monsters, this.file.name) or contains(Monsters, link(this.file.name))
SORT file.name DESC
```

## Locations
```dataview
list
FROM "content/Atlas"
WHERE contains(Monsters, this.file.name) or contains(Monsters, link(this.file.name))
SORT file.name DESC
```

## Log
* 