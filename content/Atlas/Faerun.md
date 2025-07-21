---
title: Faerûn
publish: true
aliases: BFer
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: place
locationType: region
leaders: 
image: 
date: 2025-07-02
last_modified: 2025-07-02
tags: 
---
# Faerûn
Beroemde inwoners van Faeûn zoals [[Metatron]] worden door andere inwoners ook wel bewonderend 'BFer' oftewel 'Bekende Faerûniër'.

## Locations
```dataview
list
FROM "content/Adventures"
WHERE contains(location, this.file.name) or contains(location, link(this.file.name))
SORT file.name DESC
```
## People
```dataview
table faction as Factie, description as Beschrijving
WHERE contains(type, "NPC") and (contains(location, this.file.name) or contains(location, link(this.file.name)))
SORT file.name ASC
```
