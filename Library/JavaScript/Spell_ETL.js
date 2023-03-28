//---------------------------------------------------------------------------------------------------------
//SPELL SCHOOL FUNCTION
function checkschool(school) {
  var checkschool = "";
  var lookup = {
    A: "Abjuration",
    C: "Conjuration",
    D: "Divination",
    E: "Enchantment",
    V: "Evocation",
    I: "Illusion",
    N: "Necromancy",
    T: "Transmutation",
    Abjuration: "Abjuration",
    Conjuration: "Conjuration",
    Divination: "Divination",
    Enchantment: "Enchantment",
    Evocation: "Evocation",
    Illusion: "Illusion",
    Necromancy: "Necromancy",
    Transmutation: "Transmutation",
  };
  checkschool = lookup[school];
  return checkschool;
}
// ---------------------------------------------------------------------------------------------------------
//IMPORT FROM URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const FileName = urlParams.get("FileName");
console.log(
  "Librarians: Looking in the 'Magical Items' section, for '" + FileName + "'"
);
document.getElementById("spellform").reset();
console.warn("Cleric: Casting Prestidigitation On Form...");
let ContentViewOut = fetch(
  "http://localhost:8080/Sources/Spells/" + FileName + ".json"
)
  .then(function (urlOUTPUT) {
    return urlOUTPUT.text();
  })
  .then(function (etl) {
    const text = etl;
    const obj = JSON.parse(text);
    runETL(obj);
  })
  .then(function () {
    showInput();
  });
// ---------------------------------------------------------------------------------------------------------
//EXTRACT TRANSFORM & LOAD
function runETL(obj) {
  // ---------------------------------------------------------------------------------------------------------
  //RML CUSTOM JSON
  if (obj.source == undefined) {
    console.warn("Cleric: Summoning Custom Shell");
    console.log(obj);
    for (const prop in obj) {
      console.log(`${prop} = ${obj[prop]}`);
      document.getElementById(`${prop}`).value = `${obj[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
  // ---------------------------------------------------------------------------------------------------------
  //JSON CONVERTER
  else {
    console.warn("Cleric: Summoning Converter Shell");
    console.log(obj);
    var object = {};
    //---------------------------------------------------------------------------------------------------------
    //CORE SPELL STATS
    if (obj.range.type == "radius") {
      var range =
        "Self (" +
        obj.range.distance.amount +
        "-" +
        obj.range.distance.type +
        " " +
        obj.range.type +
        ")";
    } else if (obj.range.distance.type == "touch") {
      var range = "Touch";
    } else if (obj.range.distance.type == "self") {
      var range = "Self";
    } else {
      var range = obj.range.distance.amount + " " + obj.range.distance.type;
    }
    if (obj.components.v == true) {
      var Verbal = "V";
    } else {
      var Verbal = "";
    }
    if (obj.components.s == true) {
      var Somatic = ", S";
    } else {
      var Somatic = "";
    }
    if (obj.components.m != undefined) {
      if (obj.components.m.text != undefined) {
        var Material = ", M (" + obj.components.m.text + ")";
      } else if (obj.components.m != undefined) {
        var Material = ", M (" + obj.components.m + ")";
      } else {
        var Material = ", M";
      }
    } else {
      var Material = "";
    }
    let components = Verbal + Somatic + Material;
    if (components.charAt(0) == ",") {
      components = components.substring(2);
    }
    if (obj.duration[0].type == "instant") {
      var duration = "Instant";
    } else if (obj.duration[0].type == "permanent") {
      var duration = "Until dispelled";
    } else {
      var duration =
        obj.duration[0].duration.amount + " " + obj.duration[0].duration.type;
    }
    if (obj.duration[0].concentration != undefined) {
      var concentration = "Yes";
    } else {
      var concentration = undefined;
    }
    if (obj.savingThrow != undefined) {
      var savingThrow = datacleanse(obj.savingThrow);
    } else {
      var savingThrow = undefined;
    }
    //---------------------------------------------------------------------------------------------------------
    //CLASSES CODE
    let classOut = [];
    if (obj.classes != undefined) {
      var classList = obj.classes.fromClassList;
      var classLength = classList.length;
      for (var i = 0; i < classLength; i++) {
        if (classList[i].source.startsWith("UA") != true) {
          classOut.push({ class: classList[i].name });
        }
      }
    }
    //---------------------------------------------------------------------------------------------------------
    //ENTRIES CODE
    let entriesOut = [];
    var entriesList = obj.entries;
    var entriesLength = entriesList.length;
    for (var i = 0; i < entriesLength; i++) {
      if (entriesList[i].name != undefined) {
        entriesOut.push({
          name: entriesList[i].name,
          data: datacleanse(entriesList[i].entries),
        });
      } else {
        entriesOut.push({ data: datacleanse(entriesList[i]) });
      }
    }
    if (obj.entriesHigherLevel != undefined) {
      var entriesHigherLevel = datacleanse(obj.entriesHigherLevel[0].entries);
    } else {
      var entriesHigherLevel = undefined;
    }
    //---------------------------------------------------------------------------------------------------------
    //MAPPING CODE
    object["name"] = obj.name;
    object["school"] = checkschool(obj.school);
    object["level"] = obj.level;
    object["time"] = obj.time[0].number + " " + obj.time[0].unit;
    object["range"] = range;
    object["components"] = components;
    object["duration"] = duration;
    object["concentration"] = concentration;
    object["savingThrow"] = savingThrow;
    var classOutLength = classOut.length;
    for (var i = 0; i < classOutLength; i++) {
      object["class" + [i]] = classOut[i].class;
    }
    var entriesOutLength = entriesOut.length;
    for (var i = 0; i < entriesOutLength; i++) {
      object["S" + [i] + "H"] = entriesOut[i].name;
      object["S" + [i] + "D"] = entriesOut[i].data;
    }
    object["entriesHigherLevel"] = entriesHigherLevel;
    object["source"] = obj["source"];
    object["page"] = obj["page"];
    console.log(object);
    // ---------------------------------------------------------------------------------------------------------
    // Extract File
    let outputJson = JSON.stringify(object); //turn the object into json
    document.getElementById("spellform").reset();
    const objct = JSON.parse(outputJson);
    for (const prop in objct) {
      console.log(`${objct[prop]}`);
      document.getElementById(`${prop}`).value = `${objct[prop]}`;
    }
    console.warn("Cleric: Summoning Ritual Complete");
  }
}
