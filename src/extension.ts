// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as indexString from './Boilerplates/index';
import * as messageString from './Boilerplates/message';
import * as pkgjsonString from './Boilerplates/pkgjsonBoilerplate';
import { makeFolder, makeFile } from './constructors';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Your extension "UpNext" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'upnext.createBoilerplate',
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage('UpNext Running!');
      const myPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
      let isWin = process.platform === 'win32';

      if (isWin) {
        makeFile(myPath, 'package.json', pkgjsonString);

        makeFolder(myPath, 'pages');
        makeFile(`${myPath}\\pages`, 'index.js', indexString);

        makeFolder(`${myPath}\\pages`, 'api');
        makeFile(`${myPath}\\pages\\api`, 'message.js', messageString);
      } else {
        makeFile(myPath, 'package.json', pkgjsonString);

        makeFolder(myPath, 'pages');
        makeFile(`${myPath}/pages`, 'index.js', indexString);

        makeFolder(`${myPath}/pages`, 'api');
        makeFile(`${myPath}/pages/api`, 'message.js', messageString);
      }
    }
  );
  // if context matches command, activate disposable function
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
