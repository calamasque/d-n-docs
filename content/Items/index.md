---
title: Items
publish: true
aliases:
  - items
description: 
world:
  - "[[Forgotten Realms]]"
campaign:
  - "[[Hoard of the Dragon Queen]]"
type: index
tags: 
image: 
date: 2025-07-21
last_modified: 2025-07-16
---
# Items
```dataview
TABLE
	WITHOUT ID
	link(file.link,title) AS Item,
	description AS Description,
	("[[" + owner + "]]") AS Owner
FROM "content/Items"
WHERE type = "item"
```

