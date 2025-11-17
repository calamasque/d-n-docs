---
{"publish":true,"title":"Adventures","created":"2025-07-16","modified":"2025-11-17T23:00:31.941+01:00","published":"2025-07-16","cssclasses":""}
---

# Dungeons & Detectives
| Sessie | Avontuur                                                                                | Datum       |
| ------ | --------------------------------------------------------------------------------------- | ----------- |
| 12     | [[Adventures/12 - Hypnotize\|Hypnotize]]                                     | 9 Nov 2025  |
| 11     | [[Adventures/11 - Enter the Dragon\|Enter the Dragon]]                       | 13 Aug 2025 |
| 10     | [[Adventures/10 - Death Or Glory\|Death Or Glory]]                           | 6 Jul 2025  |
| 9      | [[Adventures/9 - We All Stand Together\|We All Stand Together]]              | 25 Jun 2025 |
| 8      | [[Adventures/8 - Imagine Dragons\|Imagine Dragons]]                          | 18 May 2025 |
| 7      | [[Adventures/7 - Monster Mash\|Monster Mash]]                                | 15 Apr 2025 |
| 6      | [[Adventures/6 - Short Skirmish, Long Jacket\|Short Skirmish - Long Jacket]] | 23 Mar 2025 |
| 5      | [[Adventures/5 - I would rather go blind\|I'd Rather Go Blind]]              | 2 Mar 2025  |
| 4      | [[Adventures/4 - Roadhouse Blues\|Roadhouse Blues]]                          | 26 Jan 2025 |
| 3      | [[Adventures/3 - City by the Sea\|City by the Sea]]                          | 8 Dec 2024  |
| 2      | [[Adventures/2 - Under the Sea\|Under the Sea]]                              | 20 Nov 2024 |
| 1      | [[Adventures/1 - You Got A Friend In Me\|You Got A Friend In Me]]            | 30 Oct 2024 |
| 0      | [[Adventures/0 - Baldur's Gate\|Baldur's Gate]]                              | 1 Jan 2024  |

| Description                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \-                                                                                                                                                                                                                                                                                          |
| \-                                                                                                                                                                                                                                                                                          |
| We zijn avonturiers die weten wat ze willen en geen tijd verspillen! Dus vol in de aanval met een vastberaden Pharblex. Voor het dramatisch effect laten Dr. Egbert en Metatron bijna het leven voor we Dralmorrer Borngray en zijn trawanten verslaan met hulp van Waldo en de lizardfolk. |

# HEADER is Recap
```dataviewjs
let pages = dv.pages('"content/Adventures"')
    .where(p => p.publish == true && p.type == "session")
    .sort(p => p.session_num);

// Loop through pages
for (let p of pages) {
  let noteText = await dv.io.load(p.file.path);

  // define headers to look for
  const headers = ["Recap"];

  headers.map((header) => {
    // https://regex101.com/r/liL65A/1
    let regexPattern = new RegExp("#{1,6}\\s(" + header + ")\\n(.+?)(?:\\n#{1,6}|$)", "sg");
    let matches = regexPattern.exec(noteText);
    // check if we got a match and only then insert
    if (matches != null) {
      let fileName = p.title;
      let headerName = matches[1];
      let headerText = matches[2];
      // remove trailing line delimiter, if any, and trim whitespaces
      headerText = headerText
        .replace(new RegExp("\n---\n$"), "")
        .trim();
      // I have '- ...' placeholders in each header, so first check if the header section actually has any text
      if (headerText != "- ...") {
        // Insert into document however you like
        dv.paragraph(
          `> [!note] [[${p.file.name}#${headerName}]]` +
          "\n>" + 
          "\n" +
          headerText.split("\n").map((text) => `> ${text}`).join("\n>")
        );
      }
    }
  });
}
```

# Adventures
### [[Adventures/0 - Baldur's Gate\|Baldur's Gate]]

Avonturen in Baldur's Gate. Waar SmogEater met verkeerde vrienden hangt, de groep op zoek gaat naar eieren en zich aan boord van The Happily Ever After praat.

### [[Adventures/1 - You Got A Friend In Me\|You Got A Friend In Me]]

-

### [[Adventures/2 - Under the Sea\|Under the Sea]]

-

### [[Adventures/3 - City by the Sea\|City by the Sea]]

-

### [[Adventures/4 - Roadhouse Blues\|Roadhouse Blues]]

-

### [[Adventures/5 - I would rather go blind\|I'd Rather Go Blind]]

-

### [[Adventures/6 - Short Skirmish, Long Jacket\|Short Skirmish - Long Jacket]]

-

### [[Adventures/7 - Monster Mash\|Monster Mash]]

-

### [[Adventures/8 - Imagine Dragons\|Imagine Dragons]]

Telescopes are hard to find, but much easier to break. While we fought Gargoyles, Dr. Egbert fights The Red Wizard. A dragon(born) falls down and an imaginary dragon saves the day. We descend into the dungeons for some frog fighting.

### [[Adventures/9 - We All Stand Together\|We All Stand Together]]

-

### [[Adventures/10 - Death Or Glory\|Death Or Glory]]

We zijn avonturiers die weten wat ze willen en geen tijd verspillen! Dus vol in de aanval met een vastberaden Pharblex. Voor het dramatisch effect laten Dr. Egbert en Metatron bijna het leven voor we Dralmorrer Borngray en zijn trawanten verslaan met hulp van Waldo en de lizardfolk.

### [[Adventures/11 - Enter the Dragon\|Enter the Dragon]]

-

### [[Adventures/12 - Hypnotize\|Hypnotize]]

-

## Adventures in Dataview
| Sessie | Avontuur                                                                                |
| ------ | --------------------------------------------------------------------------------------- |
| 0      | [[Adventures/0 - Baldur's Gate\|Baldur's Gate]]                              |
| 1      | [[Adventures/1 - You Got A Friend In Me\|You Got A Friend In Me]]            |
| 2      | [[Adventures/2 - Under the Sea\|Under the Sea]]                              |
| 3      | [[Adventures/3 - City by the Sea\|City by the Sea]]                          |
| 4      | [[Adventures/4 - Roadhouse Blues\|Roadhouse Blues]]                          |
| 5      | [[Adventures/5 - I would rather go blind\|I'd Rather Go Blind]]              |
| 6      | [[Adventures/6 - Short Skirmish, Long Jacket\|Short Skirmish - Long Jacket]] |
| 7      | [[Adventures/7 - Monster Mash\|Monster Mash]]                                |
| 8      | [[Adventures/8 - Imagine Dragons\|Imagine Dragons]]                          |
| 9      | [[Adventures/9 - We All Stand Together\|We All Stand Together]]              |
| 10     | [[Adventures/10 - Death Or Glory\|Death Or Glory]]                           |
| 11     | [[Adventures/11 - Enter the Dragon\|Enter the Dragon]]                       |
| 12     | [[Adventures/12 - Hypnotize\|Hypnotize]]                                     |

