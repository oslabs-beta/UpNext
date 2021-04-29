"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const appString = require("./Boilerplates/nextBoilerplate/_app");
const indexString = require("./Boilerplates/nextBoilerplate/index");
// import * as messageString from './Boilerplates/message';
const signupString = require("./Boilerplates/nextBoilerplate/signup");
const prismaString = require("./Boilerplates/prismaBoilerplate/prismaBoilerplate");
const styleString = require("./Boilerplates/nextBoilerplate/styles");
const pkgjsonString = require("./Boilerplates/rootBoilerplate/pkgjsonBoilerplate");
const envString = require("./Boilerplates/rootBoilerplate/envBoilerplate");
const prismagraphqlString = require("./Boilerplates/serverBoilerplate/prismagraphqlBoilerplate");
const apolloString = require("./Boilerplates/serverBoilerplate/apolloServer");
const contextString = require("./Boilerplates/serverBoilerplate/contextBoilerplate");
const constructors_1 = require("./constructors");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Your extension "UpNext" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('upnext.createBoilerplate', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('UpNext Running!');
        const myPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const isWin = process.platform === 'win32';
        const terminal = vscode.window.createTerminal('UpNext');
        const divider = isWin ? "\\" : "/";
        //Creates package.json for user
        constructors_1.makeFile(myPath, 'package.json', pkgjsonString);
        //Creates pages directory with our homepage and signup page
        constructors_1.makeFolder(myPath, 'pages');
        constructors_1.makeFile(`${myPath}${divider}pages`, '_app.js', appString);
        constructors_1.makeFile(`${myPath}${divider}pages`, 'index.js', indexString);
        constructors_1.makeFile(`${myPath}${divider}pages`, 'signup.js', signupString);
        constructors_1.makeFolder(`${myPath}${divider}pages`, 'api');
        //Creates styles directory with css styling for whole application
        constructors_1.makeFolder(myPath, 'styles');
        constructors_1.makeFile(`${myPath}${divider}styles`, 'global.css', styleString);
        //Creates prisma directory with our prisma schemas and env file for sensitive data
        constructors_1.makeFolder(myPath, 'prisma');
        constructors_1.makeFile(`${myPath}${divider}prisma`, 'schema.prisma', prismaString);
        constructors_1.makeFile(`${myPath}${divider}prisma`, 'dev.db', '');
        constructors_1.makeFile(myPath, '.env', envString);
        //Creates server directory with server file along with context, typedefs, and resolvers
        constructors_1.makeFolder(myPath, 'server');
        constructors_1.makeFile(`${myPath}${divider}server`, 'apolloServer.ts', apolloString);
        constructors_1.makeFile(`${myPath}${divider}server`, 'prismaGraphql.ts', prismagraphqlString);
        constructors_1.makeFile(`${myPath}${divider}server`, 'context.ts', contextString);
        //Sends and executes terminal commands for user to install necessary packages
        terminal.sendText('npm install next react react-dom ts-node-dev typescript');
        terminal.sendText('npm install graphql apollo-server');
        terminal.sendText('npm install prisma --save-dev');
        terminal.sendText('npm install @prisma/client');
        terminal.sendText('npx prisma migrate dev --name init');
        terminal.show();
    });
    // if context matches command, activate disposable function
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map