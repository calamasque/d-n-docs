---
type:
  - NPC
world:
  - Forgotten Realms
campaign:
  - Dungeons & Detectives
deceased: false
family: 
faction: 
race:
  - human
gender:
  - male
class: 
description: Barman at Carnath Roadhouse
shop:
  - "[[Carnath roadhouse bar]]"
location:
  - "[[Carnath Roadhouse]]"
origin: 
game_date: 1489 DR
title: Barman Pete
tags: 
image: 
date: 
last_modified:
---
## Character Summary
- Barman at [[Carnath Roadhouse]].
- Claimt dat hij "beesten onder de vloer en tussen de muren hoorde hissen en bonken."

## Featured
```dataviewjs
dv.view("/Scripts/featured"); 
```
## Mentions
```dataview
LIST
FROM "content/Adventures"
WHERE contains(mentions, this.file.name) or contains(mentions, link(this.file.name))
SORT file.name DESC
```