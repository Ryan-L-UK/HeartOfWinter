const { spawnSync } = require("child_process");

function runFile(file) {
  spawnSync("node", [file], { stdio: "inherit" });
}

// Run file1
runFile("./OrchestratorFiles/1.SourceNewJSONs.js");

// Run file2
runFile("./OrchestratorFiles/2.SplitNewJSONs.js");

// Run file3
runFile("./OrchestratorFiles/3.CleanseNewJSONs.js");
