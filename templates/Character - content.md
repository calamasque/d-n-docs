## Character summary
* 

## Featured
<%* tR = await tp.user["allAdventures"]() %>

## Mentions
```dataview
LIST
FROM "content/Adventures"
WHERE contains(mentions, this.file.name) or contains(mentions, link(this.file.name))
SORT file.name DESC
```

## Log
* 