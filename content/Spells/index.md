---
title: Spells
publish: true
aliases:
  - spells
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: index
tags: 
image: 
date: 2025-07-21
last_modified: 2025-07-21
---
# Spell List
```dataview
TABLE 
	WITHOUT ID
	link(file.link, title) AS "Spell",
	level AS "Level"
FROM "content/Spells"
WHERE type = "spell"
SORT level ASC
```