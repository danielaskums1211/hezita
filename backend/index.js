const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Endpoint to execute the PowerShell scripts
app.post("/api/execute", (req, res) => {
  const scriptName = req.body.script; // The name of the PowerShell script to execute (e.g., "scheduleOffPd.ps1")

  // Change the directory to the folder containing the PowerShell scripts
  const scriptDir = __dirname + "/scripts";
  process.chdir(scriptDir);

  // Execute the PowerShell script using child_process.exec
  exec(
    `pwsh -ExecutionPolicy Bypass -File ${scriptName}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing script:", error.message);
        res.status(500).json({ error: "Error executing script" });
      } else {
        console.log("Script output:", stdout);
        res.status(200).json({ result: "Script executed successfully" });
      }
    }
  );
});

app.listen(+process.env?.PORT || 3000, () => {
  console.log(
    `Backend server listening on port ${
      process.env?.PORT || "[default port] 3000"
    }`
  );
});
