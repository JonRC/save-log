#!/usr/bin/env node

import { connectFile } from "./connectFile";
import { connectTerminal } from "./connectTerminal";
import { parseArgv } from "./parseArgv";
import { spawnProcess } from "./spawnProcess";

const command = parseArgv(process.argv);

const childProcess = spawnProcess(command);

connectTerminal(childProcess, command).catch(() => {
  console.error("Error connecting process to terminal (stdio)");
  // process.exit(1);
});

connectFile(childProcess, command).catch(() => {
  console.error("Error connecting process to log file");
  // process.exit(1);
});
