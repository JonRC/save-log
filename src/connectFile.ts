import { ChildProcess } from "child_process";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { Command } from "./Type/Command";
import path from "path";
import fs from "fs";
import { throwError } from "./Util/throwError";

export const connectFile = async <T extends ChildProcess>(input: {
  childProcess: T;
  command: Command;
  logPath: string;
}) => {
  const { childProcess, logPath } = input;

  createDirectoryIfNotExist(logPath);

  const outputFileStream = createWriteStream(logPath, { flags: "a" });
  const inputFileStream = createWriteStream(logPath, { flags: "a" });
  const errorFileStream = createWriteStream(logPath, { flags: "a" });

  if (childProcess.stdout) pipeline(childProcess.stdout, outputFileStream);
  if (childProcess.stdin) pipeline(process.stdin, inputFileStream);
  if (childProcess.stderr) pipeline(childProcess.stderr, errorFileStream);
};

const createDirectoryIfNotExist = (path: string) => {
  const fileNameAndExtensionRegex = /\/[^\/]+$/;
  const directory = path.replace(fileNameAndExtensionRegex, "");
  const directoryExists = fs.statSync(directory, { throwIfNoEntry: false });

  if (directoryExists) return;
  fs.mkdirSync(directory, { recursive: true });
};
