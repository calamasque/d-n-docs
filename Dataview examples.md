# GROUP BY
```dataview
TABLE
	WITHOUT ID
	("[[" + owner + "]]") AS Owner,
	link(rows.file.link,rows.title) AS Item,
	rows.description AS Description
FROM "content/Items"
WHERE type = "item"
GROUP BY owner
```

