#stance/enemy #faction/eldreth_veluuthra 

Elvish supremacists. 

Objective: kill/remove all humans from Faerun.

## Members
```dataview
table
description, deceased
FROM "content/Characters"
WHERE contains(faction, this.file.name) or contains(faction, link(this.file.name))
SORT file.name DESC
```
