"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnProcess = void 0;
const child_process_1 = __importDefault(require("child_process"));
const spawnProcess = (command) => {
    const spawnedProcess = child_process_1.default.spawn(command.originalCommand, {
        shell: true,
        stdio: "overlapped",
        windowsHide: true,
    });
    spawnedProcess.on("error", (data) => process.stdout.write((data === null || data === void 0 ? void 0 : data.toString()) || ""));
    return spawnedProcess;
};
exports.spawnProcess = spawnProcess;
