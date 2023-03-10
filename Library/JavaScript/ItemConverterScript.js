//---------------------------------------------------------------------------------------------------------
//ITEM TYPE FUNCTION
//---------------------------------------------------------------------------------------------------------
function checktype(type) {
  var checktype = "";
  var lookup = {
    $: "treasure",
    AF: "Ammunition",
    AIR: "Vehicle (Air)",
    AT: "Artisan's Tools",
    EXP: "Explosive",
    FD: "Food And Drink",
    G: "Adventuring gear",
    GS: "Gaming Set",
    GV: "Generic Variant",
    HA: "Heavy Armour",
    INS: "Instrument",
    LA: "Light Armour",
    M: "Melee Weapon",
    MA: "Medium Armour",
    MNT: "Mount",
    OTH: "Other",
    R: "Ranged",
    S: "Shield",
    SCF: "Spellcasting Focus",
    SHP: "Vehicle (Ship)",
    T: "Tools",
    TAH: "Tack and harness",
    TG: "Trade Good",
    VEH: "Vehicle (Land)",
  };
  checktype = lookup[type];
  return checktype;
}
//---------------------------------------------------------------------------------------------------------
//DAMAGE TYPE FUNCTION
//---------------------------------------------------------------------------------------------------------
function checkdmgtype(dmgtype) {
  var checkdmgtype = "";
  var lookup = {
    A: "Acid",
    B: "Bludgeoning",
    C: "Cold",
    F: "Fire",
    FC: "Force",
    L: "Lightning",
    N: "Necrotic",
    P: "Piercing",
    PO: "Poison",
    PS: "Psychic",
    R: "Radiant",
    S: "Slashing",
    T: "Thunder",
  };
  checkdmgtype = lookup[dmgtype];
  return checkdmgtype;
}
//---------------------------------------------------------------------------------------------------------
//PROPERTIES FUNCTION
//---------------------------------------------------------------------------------------------------------
function checkproperties(property) {
  var checkproperties = "";
  var lookup = {
    AF: "Ammunition",
    A: "Ammunition",
    F: "Finesse",
    H: "Heavy",
    L: "Light",
    RLF: "Reload",
    LD: "Loading",
    R: "Reach",
    S: "Special",
    T: "Thrown",
    "2H": "Two-Handed",
    V: "Versatile",
  };
  checkproperties = lookup[property];
  return checkproperties;
}

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//IMPORT SOURCECODE
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

async function readText(event) {
  const file = event.target.files.item(0);
  const text = await file.text();
  const obj = JSON.parse(text);

  console.log(obj);
  var object = {};
  //---------------------------------------------------------------------------------------------------------
  if (obj.type == undefined) {
    var type = "";
  } else {
    var type = checktype(obj.type);
  }

  if (obj.rarity == "none") {
    var rarity = "";
  } else {
    var rarity = obj.rarity;
  }

  if (obj.wondrous == true) {
    var wondrous = "Wondrous Item";
  } else {
    var wondrous = "";
  }

  if (obj.otherSources == undefined) {
    var source = obj.source + ", pg " + obj.page + ".";
  } else {
    var source =
      obj.source +
      ", pg " +
      obj.page +
      ". Also found in " +
      obj.otherSources[0].source.replace("UA", "") +
      ", pg " +
      obj.otherSources[0].page +
      ".";
  }

  if (obj.reqAttune == undefined) {
    var reqAttune = "";
  } else if (obj.reqAttune == true) {
    var reqAttune = "(requires attunement)";
  } else {
    var reqAttune = "(requires attunement " + obj.reqAttune + ")";
  }

  if (obj.weaponCategory == undefined) {
    var staffTrue = "";
    var weaponTrue = "";
    var weaponCategory = "";
    var dmg1 = "";
    var dmgType = "";
    var property = "";
  } else {
    var dmgType = checkdmgtype(obj.dmgType);

    if (obj.staff == true) {
      var staffTrue = "Staff";
      var type = "Melee Weapon";
    } else {
      var staffTrue = "";
    }
    var weaponTrue = "Weapon";
    var weaponCategory = obj.weaponCategory + " weapon";
    var dmg1 = obj.dmg1;
    if (obj.property[0] != undefined) {
      if (obj.property[0] == "A") {
        var property0 =
          checkproperties(obj.property[0]) + " (" + obj.range + " ft.)";
      } else {
        var property0 = checkproperties(obj.property[0]);
      }
    } else {
      var property0 = "";
    }
    if (obj.property[1] != undefined) {
      if (obj.property[1] == "A") {
        var property1 =
          ", " + checkproperties(obj.property[1]) + " (" + obj.range + " ft.)";
      } else {
        var property1 = ", " + checkproperties(obj.property[1]);
      }
    } else {
      var property1 = "";
    }
    if (obj.property[2] != undefined) {
      if (obj.property[2] == "A") {
        var property2 =
          ", " + checkproperties(obj.property[2]) + " (" + obj.range + " ft.)";
      } else {
        var property2 = ", " + checkproperties(obj.property[2]);
      }
    } else {
      var property2 = "";
    }
    var property = property0 + property1 + property2;
  }

  function processDescription(testData) {
    var inputDescription = testData["entries"];
    var outputDescription = [];

    outputDescription[0] = {
      description: "",
      name: "Main Content", //it may be easier not to set this but either way you'll need to handle not displaying the title on the main block
    }; //default the object we are generating. this means we don't have to set name if type isn't entries
    if (testData["type"] === "entries") {
      outputDescription[0]["name"] = testData["name"];
    }
    //if field is a string add it to the description, otherwise create another  and push it to the array
    for (var index in inputDescription) {
      var object = inputDescription[index];
      if (typeof object == "string") {
        outputDescription[0]["description"] += object;
      } else {
        outputDescription.push(...processDescription(object)); //because i'm calling the function recursively, i'm using the spread operator to avoid adding the array to the array
      }
    }
    return outputDescription; //return the array
  }
  console.log(obj.entries);
  var entries = processDescription(obj);
  console.log(entries);

  //---------------------------------------------------------------------------------------------------------
  //MAPPING CODE
  //---------------------------------------------------------------------------------------------------------

  object["Name-in"] = obj["name"];
  object["Wondrous-in"] = wondrous;
  object["Staff-in"] = staffTrue;
  object["weapon-in"] = weaponTrue;
  object["Type-in"] = type;
  object["Rarity-in"] = rarity;
  object["reqAttune-in"] = reqAttune;

  object["weaponCategory-in"] = weaponCategory;

  object["dmg1-in"] = dmg1;
  object["dmgType-in"] = dmgType;
  object["property-in"] = property;

  object["entries-in"] = entries;

  object["source-in"] = source;

  console.log(object);
}

/*

function generateOneEntry(descriptionObject, index){
	var paragraph = document.createElement("p");
	var label = document.createElement("label");
	var b = document.createElement("b");
	b.innerText =  "Item Description " + index; 
	label.appendChild(b);
	
	var heading = document.createElement("input");
	heading.setAttribute("id","Desc" + index + "_heading");
	heading.setAttribute("name","Desc" + index + "_heading");
	if(descriptionObject["name"] !== undefined){
		heading.value = descriptionObject["name"];
	}
	var content = document.createElement("textarea");
	content.setAttribute("id", "Desc" + index + "_input");
	content.setAttribute("name", "Desc" + index + "_input");
	content.setAttribute("cols","58");
	content.setAttribute("rows","6");
	
	content.value = descriptionObject["description"];
	
	paragraph.appendChild(label);
	paragraph.appendChild(heading);
	paragraph.appendChild(content);
	return paragraph;
}

function displayOnPage(parentElement, descriptionEntries){
	for(var index in descriptionEntries){
		parentElement.appendChild(generateOneEntry(descriptionEntries[index], parseInt(index)+1)); //plus 1 because 0 based indexing
	}
}

displayOnPage(document.getElementById("content"), processDescription(testData));

*/
