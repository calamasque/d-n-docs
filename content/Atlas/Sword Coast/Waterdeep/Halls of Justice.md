---
title: Halls of Justice
publish: true
aliases: 
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place 
locationType: temple
leaders: 
image: 
date: 2025-07-15
last_modified: 2025-07-14
tags:
---
# Halls of Justice
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

Tempel van Tyr gevestigd in [[content/Atlas/Sword Coast/Waterdeep/index]]. 

[[SmogEater]] was hier iets te loslippig en deelde dat wij in het bezit waren van 