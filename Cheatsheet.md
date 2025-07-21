https://help.obsidian.md/advanced-syntax

| Format                 | Syntax                   | Voorbeeld                 |
| ---------------------- | ------------------------ | ------------------------- |
| Bold                   | `** **` or `__ __`       | **Bold**                  |
| Italic                 | `* *` or `_ _`           | *Italic*                  |
| Strikethrough          | `~~ ~~`                  | ~~Strikethrough~~         |
| Highlight              | == ==                    | ==Highlight==             |
| Bold and nested italic | `** **`  and  `_ _`      | _ Bold and nested italic_ |
| Bold and italic        | `*** ***`  or  `___ ___` | ***Bold and italic***     |
Wiki link -  \[\[Dungeons and Dragons\]\]
MarkDown link -  \[Dungeons and Dragons\]\(Dungeons%20and%20Dragons.md\)

## Images
\!\[Engelbart\|100x145\]\(https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

### Internal
\!\[\[Engelbart.png|200x290\]\]
![[Engelbart.png|200x290]]

## Quote
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

## Lists
1) Appel
2) Peer
3) Banaan

- appel
- peer
- banaan

1. Appel
2. Peer
   
3. Banaan

1\. This won't be a list item. (vanwege de \\)

- [ ] To do
	- [ ] subtask 1
	- [ ] subtask 2
- [x] Done
- [ ] What else?

## Comments
This is a%%n inline%% comment. (also check in editing mode)

%%
This is a block comment.

Block comments can span multiple lines.
%%
## Footnotes
This is a simple footnote[^1]. Another[^2]. And another[^note]

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.