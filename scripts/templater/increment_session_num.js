module.exports = async (tp) => {
  const folderPath = "content/Adventures";
  const files = app.vault.getMarkdownFiles();

  let maxSessionNum = 0;

  for (const file of files) {
    if (file.path.startsWith(folderPath + "/")) {
      const content = await app.vault.read(file);
      const frontmatterMatch = content.match(/---\s*\n([\s\S]*?)\n---/);

      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const sessionNumMatch = frontmatter.match(/session_num:\s*(\d+)/);

        if (sessionNumMatch) {
          const num = parseInt(sessionNumMatch[1]);
          if (!isNaN(num) && num > maxSessionNum) {
            maxSessionNum = num;
          }
        }
      }
    }
  }

  return maxSessionNum + 1;
}