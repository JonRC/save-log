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
  const fileStream = createWriteStream(filePath);
  const errorFileStream = createWriteStream(filePath);

  if (childProcess.stdout) pipeline(childProcess.stdout, fileStream);
  if (childProcess.stderr) pipeline(childProcess.stderr, errorFileStream);
};
