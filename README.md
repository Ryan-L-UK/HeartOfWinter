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

- When the file has loaded, firstly delete the entire: `</head>` from the document. Leave only the link to the stylesheet
- Run the following Find & Replace commands:
  - class="contains-task-list" replacing with ""
  - class="task-list-item enabled" replacing with ""
  - `<aside>` replacing with `<em>`
  - `</aside>` replacing with `</em>`

---

- To add a link to any item, creature, spell, etc, replace the `<a href="#">` with a absolute link to the file. Which looks like this:
  'http://localhost:8080/Sources/Magic Items/'

---

## TTD Notes

- Harbour requires some updates, current file is ripped direct from TSGC book.
- Crimson Stone rework.
- Adjust the map to use URL parameters to call for page names.

## Locations & Districts To Write

- BlackDragonGate.md
- Cliffgate.md
- Heapside.md
- Manorborn.md
- Norchapel.md
- Rivington.md
- Sea Tower.md
- TempleDistrict.md
- WaukeensPromenade.md
- Whitekeep.md
- WyrmsRock.md
- AdventurersGuild.md
- CityCouncil.md
- GoldenCollar.md
- Graveyard.md
- GrimmsmouthHall.md
- MainHarbour.md
- SeafarersGuild.md
- SeilfEmit.md
- TempleAndLibrary.md
- TheMurkyRetreat.md
- TheScratchingPost.md
- TheSilverSovereign.md
- TheWaterBowl.md
- ThievesGuild.md
- WizardsTower.md
