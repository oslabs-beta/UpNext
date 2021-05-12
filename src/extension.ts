// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as appString from './Boilerplates/nextBoilerplate/_app';
import * as indexString from './Boilerplates/nextBoilerplate/index';
import * as styleString from './Boilerplates/nextBoilerplate/styles';
import * as signupString from './Boilerplates/nextBoilerplate/signup';
import * as nextauthString from './Boilerplates/nextBoilerplate/nextauth';
import * as pkgjsonString from './Boilerplates/rootBoilerplate/pkgjsonBoilerplate';
import * as envString from './Boilerplates/rootBoilerplate/envBoilerplate';
import * as mochaString from './Boilerplates/testBoilerplate/mochaBoilerplate';
import * as prismaString from './Boilerplates/prismaBoilerplate/prismaBoilerplate';
import * as serverString from './Boilerplates/serverBoilerplate/serverBoilerplate';
import * as prismagraphqlString from './Boilerplates/serverBoilerplate/prismagraphqlBoilerplate';
import * as contextString from './Boilerplates/serverBoilerplate/contextBoilerplate';
import * as sessionString from './Boilerplates/stripeBoilerplate/sessionBoilerplate';
import * as checkoutString from './Boilerplates/stripeBoilerplate/checkoutBoilerplate';
import * as successString from './Boilerplates/stripeBoilerplate/successBoilerplate';
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
      //Checks user's machine for windows
      const isWin = process.platform === 'win32';

      //Creates a seperate server to install dependencies named UpNext
      const terminal: vscode.Terminal = vscode.window.createTerminal('UpNext');
      //This divider checks if the os platform is windows. If windows, change the divider set to "\\", everything else "/"
      const divider = isWin ? '\\' : '/';

      //Creates package.json for user
      makeFile(myPath, 'package.json', pkgjsonString);
      //Creates pages directory with serverless routes
      makeFolder(myPath, 'pages');
      makeFile(`${myPath}${divider}pages`, '_app.js', appString);
      makeFile(`${myPath}${divider}pages`, 'index.js', indexString);
      makeFile(`${myPath}${divider}pages`, 'checkout.js', checkoutString);
      makeFile(`${myPath}${divider}pages`, 'signup.js', signupString);
      makeFile(`${myPath}${divider}pages`, 'success.js', successString);
      //Creates API directory to house api endpoint functionality
      makeFolder(`${myPath}${divider}pages`, 'api');
      makeFolder(`${myPath}${divider}pages${divider}api`, 'auth');
      makeFile(`${myPath}${divider}pages${divider}api${divider}auth`,'[...nextauth].js', nextauthString);
      makeFolder(`${myPath}${divider}pages${divider}api`, 'checkout');
      makeFile(`${myPath}${divider}pages${divider}api${divider}checkout`, 'session.js', sessionString);
      //Creates styles directory with css styling for whole application
      makeFolder(myPath, 'styles');
      makeFile(`${myPath}${divider}styles`, 'global.css', styleString);
      //Creates tests directory with jest and enzyme boilerplate tests
      makeFolder(myPath, '__tests__');
      makeFile(`${myPath}${divider}__tests__`, 'mocha.js', mochaString);
      //Creates prisma directory with our prisma schemas and env file for sensitive data
      makeFolder(myPath, 'prisma');
      makeFile(`${myPath}${divider}prisma`, 'schema.prisma', prismaString);
      makeFile(myPath, '.env', envString);
      //Creates server directory with server file along with context, typedefs, and resolvers
      makeFolder(myPath, 'server');
      makeFile(`${myPath}${divider}server`, 'server.ts', serverString);
      makeFile(`${myPath}${divider}server`, 'prismaGraphql.ts', prismagraphqlString);
      makeFile(`${myPath}${divider}server`, 'context.ts', contextString);
      //Sends and executes terminal commands for user to install necessary packages
      terminal.sendText('npm install next next-auth react react-dom ts-node-dev typescript stripe');
      terminal.sendText('npm install @apollo/client graphql apollo-server-express express passport cors sqlite3');
      terminal.sendText('npm install mocha prisma @types/react --D');
      terminal.sendText('npm install @prisma/client @stripe/react-stripe-js @stripe/stripe-js');
      terminal.sendText('npx prisma migrate dev --name init');
      terminal.show();
    }
  );
  // if context matches command, activate disposable function
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
