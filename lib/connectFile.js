"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectFile = void 0;
const fs_1 = require("fs");
const promises_1 = require("stream/promises");
const path_1 = __importDefault(require("path"));
const connectFile = (childProcess, command) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = command.originalCommand.replace(/\s+/g, "_");
    const fileExtension = "txt";
    const currentDirectory = process.cwd();
    const nowDate = new Date().toISOString();
    const filePath = path_1.default.resolve(currentDirectory, `${fileName}_${nowDate}.${fileExtension}`);
    const fileStream = (0, fs_1.createWriteStream)(filePath);
    const errorFileStream = (0, fs_1.createWriteStream)(filePath);
    if (childProcess.stdout)
        (0, promises_1.pipeline)(childProcess.stdout, fileStream);
    if (childProcess.stderr)
        (0, promises_1.pipeline)(childProcess.stderr, errorFileStream);
});
exports.connectFile = connectFile;
