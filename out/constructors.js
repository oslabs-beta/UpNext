"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFile = exports.makeFolder = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
//Folder constructor function
function makeFolder(folderPath, folderName) {
    fs.mkdir(path.resolve(folderPath, folderName), err => {
        // if err, display error message
        if (err) {
            console.log("err: ", err);
            return vscode.window.showErrorMessage(`Failed to create ${folderName}!`);
        }
    });
}
exports.makeFolder = makeFolder;
//File constructor function
function makeFile(filePath, fileName, fileString) {
    fs.writeFile(path.resolve(filePath, fileName), fileString, err => {
        // if err, display error message
        if (err) {
            console.log("err: ", err);
            return vscode.window.showErrorMessage(`Failed to create ${fileName}!`);
        }
    });
}
exports.makeFile = makeFile;
//# sourceMappingURL=constructors.js.map