"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgv = void 0;
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
const parseArgv = (argv) => {
    const yargsParsed = (0, yargs_1.default)((0, helpers_1.hideBin)(argv))
        .strictOptions()
        .demandCommand(1, "Required at least one command \n Example: save-log cd")
        .scriptName("save-log")
        .parseSync();
    const originalCommand = yargsParsed._.join(" ");
    return {
        originalCommand,
    };
};
exports.parseArgv = parseArgv;
