---
title: The masked lords
publish: true
aliases: 
description: 
type: faction
faction_type:
- geheim
- politiek
alignment: 
symbol: masker
goals:
scope: [[Waterdeep]]
headquarters: [[Waterdeep]]
image: 
date: 2025-07-16
last_modified: 2025-07-15
tags: 
---
# The masked lords

# The masked lords
Rulers of Waterdeep. Among the 

## Members
```dataview
table
description, deceased
FROM "content/Characters" or "content/The Band"
WHERE contains(faction, this.file.name) or contains(faction, link(this.file.name))
SORT file.name DESC
```