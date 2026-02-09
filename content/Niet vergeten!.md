```dataviewjs
const today = dv.date("today");

const tasks = dv.pages("")
  .flatMap(p => p.file.tasks)
  .where(t =>
    !t.completed &&
    t.text.includes("todo")
  )
  .map(t => {
    t.text = t.text.replace(/[➕📅⏳🛫⏫🔼🔽].*$/, "");
    return t;
  })
  .sort(t => dv.page(t.path)?.session_date, "desc"); // <-- sort by page frontmatter
  if (tasks.length > 0) {
    dv.header(1, "To do");
	dv.taskList(tasks, false);
}
```