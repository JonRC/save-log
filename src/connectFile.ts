import { ChildProcess } from "child_process";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { Command } from "./Type/Command";
import path from "path";
import { throwError } from "./Util/throwError";

export const connectFile = async <T extends ChildProcess>(
  childProcess: T,
  command: Command
) => {
  const fileName = command.originalCommand.replace(/\s+/g, "_");
  const fileExtension = "txt";
  const currentDirectory = process.cwd();
  const nowDate = new Date().toISOString();

  const filePath = path.resolve(
    currentDirectory,
    `${fileName}_${nowDate}.${fileExtension}`
  );

  const outputFileStream = createWriteStream(filePath, { flags: "a" });
  const inputFileStream = createWriteStream(filePath, { flags: "a" });
  const errorFileStream = createWriteStream(filePath, { flags: "a" });

  if (childProcess.stdout) pipeline(childProcess.stdout, outputFileStream);
  if (childProcess.stdin) pipeline(process.stdin, inputFileStream);
  if (childProcess.stderr) pipeline(childProcess.stderr, errorFileStream);
};
