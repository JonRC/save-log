import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { Command } from "./Type/Command";

export const parseArgv = (argv: string[]): Command => {
  const yargsParsed = yargs(hideBin(argv))
    .strictOptions()
    .scriptName("save-log")
    .parseSync();

  const originalCommand = yargsParsed._.join(" ");

  return {
    originalCommand,
  };
};
