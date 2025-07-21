---
title: Specter
publish: true
aliases: 
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: monster
monster_type: undead
encounter: 
tags: 
image: 
date: 2025-07-16
last_modified: 2025-07-14
---
# Stat Block
```statblock
monster: Specter 
```

## Monster summary
* 

## Encounters
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