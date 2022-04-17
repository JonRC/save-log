import { ChildProcess } from "child_process";
import { createReadStream, createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
import { Command } from "./Type/Command";
import { throwError } from "./Util/throwError";

export const connectTerminal = async <T extends ChildProcess>(
  childProcess: T,
  command: Command
) => {
  if (childProcess.stdout) pipeline(childProcess.stdout, process.stdout);
  if (childProcess.stderr) pipeline(childProcess.stderr, process.stderr);
  if (childProcess.stdin) process.stdin.pipe(childProcess.stdin);
};
