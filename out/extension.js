"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const appString = require("./Boilerplates/_app");
const indexString = require("./Boilerplates/index");
// import * as messageString from './Boilerplates/message';
const signupString = require("./Boilerplates/signup");
const prismaString = require("./Boilerplates/prismaBoilerplate");
const styleString = require("./Boilerplates/styles");
const pkgjsonString = require("./Boilerplates/pkgjsonBoilerplate");
const envString = require("./Boilerplates/envBoilerplate");
const apolloString = require("./Boilerplates/apolloServer");
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
        if (isWin) {
            //Creates package.json for user
            constructors_1.makeFile(myPath, 'package.json', pkgjsonString);
            //Creates pages directory with our homepage and signup page
            constructors_1.makeFolder(myPath, 'pages');
            constructors_1.makeFile(`${myPath}\\pages`, '_app.js', appString);
            constructors_1.makeFile(`${myPath}\\pages`, 'index.js', indexString);
            constructors_1.makeFile(`${myPath}\\pages`, 'signup.js', signupString);
            constructors_1.makeFolder(`${myPath}\\pages`, 'api');
            //Creates styles directory with css styling for whole application
            constructors_1.makeFolder(myPath, 'styles');
            constructors_1.makeFile(`${myPath}\\styles`, 'global.css', styleString);
            //Creates prisma directory with our prisma schemas and env file for sensitive data
            constructors_1.makeFolder(myPath, 'prisma');
            constructors_1.makeFile(`${myPath}\\prisma`, 'schema.prisma', prismaString);
            constructors_1.makeFile(`${myPath}\\prisma`, 'apolloServer.js', apolloString);
            constructors_1.makeFile(myPath, '.env', envString);
            //Sends and executes terminal commands for user to install necessary packages
            terminal.sendText('npm install next react react-dom');
            terminal.sendText('npm install apollo-server graphql');
            terminal.sendText('npm install prisma --save-dev');
            // terminal.sendText('npx prisma init');
            terminal.show();
        }
        else {
            //Creates package.json for user
            constructors_1.makeFile(myPath, 'package.json', pkgjsonString);
            //Creates pages directory with our homepage and signup page
            constructors_1.makeFolder(myPath, 'pages');
            constructors_1.makeFile(`${myPath}/pages`, '_app.js', appString);
            constructors_1.makeFile(`${myPath}/pages`, 'index.js', indexString);
            constructors_1.makeFile(`${myPath}/pages/`, 'signup.js', signupString);
            constructors_1.makeFolder(`${myPath}/pages`, 'api');
            //Creates styles directory with css styling for whole application
            constructors_1.makeFolder(myPath, 'styles');
            constructors_1.makeFile(`${myPath}/styles`, 'global.css', styleString);
            //Creates prisma directory with our prisma schemas and env file for sensitive data
            constructors_1.makeFolder(myPath, 'prisma');
            constructors_1.makeFile(`${myPath}/prisma`, 'schema.prisma', prismaString);
            constructors_1.makeFile(`${myPath}/prisma`, 'apolloServer.js', apolloString);
            constructors_1.makeFile(myPath, '.env', envString);
            terminal.sendText('npm install next react react-dom');
            terminal.sendText('npm install apollo-server graphql');
            terminal.sendText('npm install prisma --save-dev');
            // terminal.sendText('npx prisma init');
            terminal.show();
        }
    });
    // if context matches command, activate disposable function
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map