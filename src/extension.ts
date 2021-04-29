// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as appString from './Boilerplates/nextBoilerplate/_app';
import * as indexString from './Boilerplates/nextBoilerplate/index';
import * as signupString from './Boilerplates/nextBoilerplate/signup';
import * as prismaString from './Boilerplates/prismaBoilerplate/prismaBoilerplate';
import * as styleString from './Boilerplates/nextBoilerplate/styles';
import * as pkgjsonString from './Boilerplates/rootBoilerplate/pkgjsonBoilerplate';
import * as envString from './Boilerplates/rootBoilerplate/envBoilerplate';
import * as prismagraphqlString from './Boilerplates/serverBoilerplate/prismagraphqlBoilerplate';
import * as apolloString from './Boilerplates/serverBoilerplate/apolloServer';
import * as contextString from './Boilerplates/serverBoilerplate/contextBoilerplate';
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
      const isWin = process.platform === 'win32';

      const terminal: vscode.Terminal = vscode.window.createTerminal('UpNext');

      const divider = isWin ? "\\" : "/";

      //Creates package.json for user
      makeFile(myPath, 'package.json', pkgjsonString);
      //Creates pages directory with our homepage and signup page
      makeFolder(myPath, 'pages');
      makeFile(`${myPath}${divider}pages`, '_app.js', appString);
      makeFile(`${myPath}${divider}pages`, 'index.js', indexString);
      makeFile(`${myPath}${divider}pages`, 'signup.js', signupString);
      makeFolder(`${myPath}${divider}pages`, 'api');
      //Creates styles directory with css styling for whole application
      makeFolder(myPath, 'styles');
      makeFile(`${myPath}${divider}styles`, 'global.css', styleString);
      //Creates prisma directory with our prisma schemas and env file for sensitive data
      makeFolder(myPath, 'prisma');
      makeFile(`${myPath}${divider}prisma`, 'schema.prisma', prismaString);
      makeFile(myPath, '.env', envString);
      //Creates server directory with server file along with context, typedefs, and resolvers
      makeFolder(myPath, 'server');
      makeFile(`${myPath}${divider}server`, 'apolloServer.ts', apolloString);
      makeFile(`${myPath}${divider}server`, 'prismaGraphql.ts', prismagraphqlString);
      makeFile(`${myPath}${divider}server`, 'context.ts', contextString);
      //Sends and executes terminal commands for user to install necessary packages
      terminal.sendText('npm install next react react-dom ts-node-dev typescript');
      terminal.sendText('npm install @apollo/client graphql apollo-server');
      terminal.sendText('npm install prisma --save-dev');
      terminal.sendText('npm install @prisma/client');
      terminal.sendText('npx prisma migrate dev --name init');
      terminal.show();
    }
  );
  // if context matches command, activate disposable function
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
