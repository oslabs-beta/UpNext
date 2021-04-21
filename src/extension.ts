// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as htmlString from './Boilerplates/htmlBoilerplate';
import * as messageString from './Boilerplates/message';
import { makeFolder, makeFile }  from './Peter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "UpNext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('upnext.createBoilerplate', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
	  vscode.window.showInformationMessage('UpNext Running!');
	  const peterPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

    makeFolder(peterPath, 'test');
	  makeFolder(`${peterPath}\\test`, 'test-ception');
    makeFile(`${peterPath}\\test`, 'htmlBoilerplate.html', htmlString);
	  makeFile(`${peterPath}\\test\\test-ception`, 'message.js', messageString);
	});
	// if context matches command, activate disposable function
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
