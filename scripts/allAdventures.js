// .obsidian/scripts/generate-campaign-sessions.js
module.exports = async (tp) => {
  const dv = app.plugins.plugins["dataview"].api;

  const sessions = Object.values(dv.index.pages)
    .filter(p =>
      p.path.startsWith("content/Adventures/") &&
      (Array.isArray(p.type) ? p.type.includes("session") : p.type === "session")
    );

  // Build Markdown output (tables, links)
  let output = `### Campaign Sessions\n\n`;
  output += `| # | Title | Date |\n|--|--|--|\n`;

  sessions.sort((a, b) => a.session_num - b.session_num).forEach(p => {
    const title = p.title ?? p.file.name;
    output += `| ${p.session_num} | [[${p.path}|${title}]] | ${p.date ?? "—"} |\n`;
  });

  return output;
};