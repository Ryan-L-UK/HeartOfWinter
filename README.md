# The Elfsong Tavern

A Central Hub for all the world information for adventures in Gullet Cove and the land of Faerûn. You can also find a collection of useful notes and information here.

---

## Running The Server

- ### OSX
  To run the server, launch a terminal and run the alias command 'ServerStart'
- ### Win11
  To run the server, launch a terminal and cd into the elfsong folder. Once inside run the command: `node server.js`

---

## Notion Markdown Load Commands

- Export the file from notion using the 'export Markdown/CSV'
- Load file into the Adv 0.0 MDConvert.md file
- Run CMD+SHIFT+P and run the all in one macro

---

- When the file has loaded, firsly delete the entire: `</head>` from the document.
- Run the following Find & Replace commands, replacing with "":
  - class="contains-task-list"
  - class="task-list-item enabled"

---

- To add a link to any item, creature, spell, etc, replace the `<a href="#">` with a absolute link to the file. Which looks like this:
  'http://localhost:8080/Sources/Magic Items/'

---

## Locations To Write

- The Grand Library (Blank)
- The Old Lighthouse (Ripped From Book)
- Harbour (Ripped from book, missing info on sunk ship and the tripple cannons)
