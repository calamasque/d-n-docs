
## Members
```dataview
table
description, deceased
FROM "content/Characters" or "content/The Band"
WHERE contains(faction, this.file.name) or contains(faction, link(this.file.name))
SORT file.name DESC
```
