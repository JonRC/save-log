import { resolve } from "path";
import { Command } from "./Type/Command";

export const resolvePath = (input: { command: Command }) =>
  hasExtension(input.command.path)
    ? resolvePathWithExtension(input.command)
    : resolvePathWithoutExtension(input.command);

const resolvePathWithExtension = (command: Command) => {
  const plainPath = command.path;

  if (!plainPath) throw Error("Unexpected error resolving path");

  const resolvedPath = resolve(plainPath);

  return resolvedPath;
};

const resolvePathWithoutExtension = (command: Command) => {
  const plainPath = command.path || process.cwd();

  const originalCommandString = command.originalCommand.replace(/\s/g, "_");
  const isoDate = new Date().toISOString();
  const fileName = `${originalCommandString}_${isoDate}.txt`;
  const resolvedPath = resolve(plainPath, fileName);

  return resolvedPath;
};

const hasExtension = (path?: string) => {
  if (!path) return false;
  return Boolean(path.match(/\.[^\/]+$/));
};
