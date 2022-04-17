import childProcess from "child_process";
import { createWriteStream } from "fs";
import { Command } from "./Type/Command";

export const spawnProcess = (command: Command) => {
  const spawnedProcess = childProcess.spawn(command.originalCommand, {
    shell: true,
    stdio: "overlapped",
    windowsHide: true,
  });

  spawnedProcess.on("error", (data) =>
    process.stdout.write(data?.toString() || "")
  );

  return spawnedProcess;
};
