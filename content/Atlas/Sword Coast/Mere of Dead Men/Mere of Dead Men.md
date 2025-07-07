## Featured
```dataview
list
FROM "content/Adventures"
WHERE contains(location, this.file.name) or contains(location, link(this.file.name))
SORT file.name DESC
```
## Characters
```dataview
table faction as Faction, description as Description
WHERE contains(type, "NPC") and (contains(location, this.file.name) or contains(location, link(this.file.name)))
SORT file.name ASC
```
