---
title: <% tp.file.title %>
publish: true
aliases: 
description: 
type:
  - NPC
world:
  - Forgotten Realms
campaign:
  - Dungeons & Detectives
deceased: 
family: 
faction: 
race: 
gender: 
class: 
shop: 
location: 
origin: 
game_date: 1489 DR
tags: 
image: 
date: <% tp.date.now("YYYY-MM-DD") %>
last_modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
# <% tp.file.title %>

## Character summary
* 

## Featured
```dataviewjs dv.view("/Scripts/featured"); ```
## Mentions
```dataview
LIST
FROM "content/Adventures"
WHERE contains(mentions, this.file.name) or contains(mentions, link(this.file.name))
SORT file.name DESC
```

## Log
* 