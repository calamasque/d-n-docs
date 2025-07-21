---
title: Wisdom saving throw
publish: true
aliases: 
description: 
type: 
tags: 
image: 
date: 2025-07-21
last_modified: 2025-07-21
---
# Wisdom saving throw
```dataview
TABLE 
	WITHOUT ID
	link(file.link, title) AS "Spell",
	level AS "Level"
FROM "content/Spells"
WHERE type = "spell" AND contains(saving_throw, "Wisdom")
SORT level ASC
```
