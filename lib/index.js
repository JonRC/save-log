#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectFile_1 = require("./connectFile");
const connectTerminal_1 = require("./connectTerminal");
const parseArgv_1 = require("./parseArgv");
const spawnProcess_1 = require("./spawnProcess");
const command = (0, parseArgv_1.parseArgv)(process.argv);
const childProcess = (0, spawnProcess_1.spawnProcess)(command);
(0, connectTerminal_1.connectTerminal)(childProcess, command).catch(() => {
    console.error("Error connecting process to terminal (stdio)");
    // process.exit(1);
});
(0, connectFile_1.connectFile)(childProcess, command).catch(() => {
    console.error("Error connecting process to log file");
    // process.exit(1);
});
