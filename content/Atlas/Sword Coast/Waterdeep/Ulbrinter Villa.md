---
title: Ulbrinter Villa
publish: true
aliases: 
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
# Ulbrinter Villa

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
## Info
* Woning van [[Lord Ulbrinter]] en [[Lady Remallia Haventree]]. 
* Gelegen aan [[Delzorin street]] in de [[North Ward]] van [[Waterdeep]]

De villa is gelegen in de North Ward van [[Waterdeep]] aan Delzorin Street. Deze straat kan worden bereikt door de High Road te volgen naar de noordelijke poort.

