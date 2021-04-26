import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

//Folder constructor function
function makeFolder(folderPath: string, folderName: string) {
  fs.mkdir(path.resolve(folderPath, folderName), err => {
    // if err, display error message
    if (err) {
      console.log("err: ", err);
      return vscode.window.showErrorMessage(
        `Failed to create ${folderName}!`
      );
    }
  });
}

//File constructor function
function makeFile(filePath: string, fileName: string, fileString: string) {
  fs.writeFile(path.resolve(filePath, fileName), fileString, err => {
    // if err, display error message
    if (err) {
      console.log("err: ", err);
      return vscode.window.showErrorMessage(
        `Failed to create ${fileName}!`
      );
    }
  });
}

export { makeFolder, makeFile };