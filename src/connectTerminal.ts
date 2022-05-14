import { ChildProcess } from "child_process";
import { pipeline } from "stream/promises";
import { Command } from "./Type/Command";

export const connectTerminal = async <T extends ChildProcess>(input: {
  childProcess: T;
  command: Command;
}) => {
  const { childProcess, command } = input;

  if (childProcess.stdout) pipeline(childProcess.stdout, process.stdout);
  if (childProcess.stderr) pipeline(childProcess.stderr, process.stderr);
  if (childProcess.stdin) process.stdin.pipe(childProcess.stdin);

  childProcess.on("exit", process.exit);
};
