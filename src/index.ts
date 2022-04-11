#!/usr/bin/env node

import { pipeline } from "stream/promises";
import { parseArgv } from "./parseArgv";
import { spawnProcess } from "./spawnProcess";

const command = parseArgv(process.argv);

const originalProcess = spawnProcess(command.originalCommand) as any;

// console.log(process.stdout.eventNames());

// pipeline(originalProcess.std)

// pipeline(originalProcess.stdout, process.stdout);
// pipeline(process.stdin, originalProcess.stdin);
// pipeline(originalProcess.stderr, process.stderr);
