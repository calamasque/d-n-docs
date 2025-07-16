<%*
const { app, vault } = this.app;

// CONFIGURATION
const folderPath = "content";          // Folder to restrict to (no leading /)
const fieldToChange = "type";          // Field to change
const newValue = "session";             // New value to assign
const forceType = "string";            // string | list | number | boolean

const conditionField = "type";         // Only process files where this field...
const conditionValue = "sessie";      // ...has this exact value

const files = vault.getMarkdownFiles();
let updated = 0;

function toYAMLString(value) {
  if (Array.isArray(value)) {
    return "\n" + value.map(item => `  - ${item}`).join("\n");
  } else if (typeof value === "boolean" || typeof value === "number") {
    return ` ${value}`;
  } else {
    return ` "${value}"`;
  }
}

for (const file of files) {
  // ✅ Filter: only process files in the "content/" folder
  if (!file.path.startsWith(folderPath + "/")) continue;

  const content = await vault.read(file);
  if (!content.startsWith("---")) continue;

  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) continue;

  let frontmatter = match[1];

  // Check condition field value
  const conditionRegex = new RegExp(`^${conditionField}:[ \\t]*("?)(.*?)\\1\\s*$`, 'm');
  const conditionMatch = frontmatter.match(conditionRegex);
  if (!conditionMatch || conditionMatch[2] !== conditionValue) continue;

  // Update field
  const targetRegex = new RegExp(`^${fieldToChange}:[\\s\\S]*?(?=\\n[^ \\t-]|\\n---|$)`, 'm');

  if (targetRegex.test(frontmatter)) {
    const replacement = `${fieldToChange}:${toYAMLString(newValue)}`;
    frontmatter = frontmatter.replace(targetRegex, replacement);
  } else {
    frontmatter += `\n${fieldToChange}:${toYAMLString(newValue)}`;
  }

  const newContent = content.replace(/^---\n[\s\S]*?\n---/, `---\n${frontmatter}\n---`);
  await vault.modify(file, newContent);
  updated++;
}

tR += `✅ Updated "${fieldToChange}" to ${JSON.stringify(newValue)} in ${updated} file(s) in "${folderPath}/" where ${conditionField} == "${conditionValue}".`;
%>