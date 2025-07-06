---
type:
  - Monster
world:
  - Forgotten Realms
campaign:
  - Dungeons & Detectives
description: 
encounter: 
game_date: 1489 DR
title: Spectre
tags: 
image: 
publish: true
date: 2025-07-06
last_modified: 2025-07-06
---

# Spectre

## Monster summary
* 

## Featured
```dataview
list
FROM "content/Adventures"
WHERE contains(encounters, this.file.name) or contains(encounters, link(this.file.name))
SORT file.name DESC
```

## Locations
```dataview
list
FROM "content/Atlas"
WHERE contains(monsters, this.file.name) or contains(monsters, link(this.file.name))
SORT file.name DESC
```

## Log
* 