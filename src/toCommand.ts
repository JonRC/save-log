import { pipe, slice, join } from "./Function";

export const toCommand = (argv: string[]) => pipe(argv, slice(2), join(" "));

const removeSaveLogArgs = (command: string) => {
  const argsRegex = new RegExp("-\\w+(?=--)");
};
