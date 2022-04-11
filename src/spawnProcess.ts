import childProcess from "child_process";

export const spawnProcess = (command: string) => {
  const spawnedProcess = childProcess.spawn(command, {
    env: process.env,
    shell: true,
    stdio: [process.stdout, process.stdin, process.stderr],
  });

  return spawnedProcess;
};
