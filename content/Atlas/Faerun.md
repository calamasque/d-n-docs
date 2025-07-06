---
title: Faerûn
aliases: BFer
tags: 
image: 
date: 2025-07-02
last_modified: 2025-07-02
---
# Faerûn
Beroemde inwoners van Faeûn zoals [[Metatron]] worden door andere inwoners ook wel bewonderend 'BFer' oftewel 'Bekende Faerûniër'.

## Locations
```dataview
list
FROM "content/Events"
WHERE contains(location, this.file.name) or contains(location, link(this.file.name))
SORT file.name DESC
```
## People
```dataview
table faction as Faction, description as Description
WHERE contains(type, "NPC") and (contains(location, this.file.name) or contains(location, link(this.file.name)))
SORT file.name ASC
```