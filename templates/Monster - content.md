# <% tp.file.title %>

## Monster summary
* 

## Featured
```dataview
list
FROM "content/Adventures"
WHERE contains(Monsters, this.file.name) or contains(Monsters, link(this.file.name))
SORT file.name DESC
```

## Locations
```dataview
list
FROM "content/Atlas"
WHERE contains(Monsters, this.file.name) or contains(Monsters, link(this.file.name))
SORT file.name DESC
```

## Log
* 