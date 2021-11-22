# npm-automation


2-Getting Started Creating NPM Scripts

-NPM Run
npm run

-Lifecycle Scripts vc. Custom Scripts

https://docs.npmjs.com/cli/v8/using-npm/scripts

-NPM Test
npm run test
npm test

-NPM Start
npm start

3-Scripting for Building

-CLI Tools via NPM Scripts
https://docs.npmjs.com/cli/v8/commands/npm-run-script

By running tsc:

tsc
bash: tsc: command not found

-TypeScript: Compile with NPM Scripts
"scripts": {
    "tsc":"tsc",

try 
npm run tsc

-TypeScript: Passing Arguments in  NPM Scripts
npm run tsc -- --init

npm run tsc , now everything will be compiled

- TypeScript: Start Script
  "scripts": {
    "tsc":"tsc",
    "start":"node index.js",

npm start

- TypeScript: Building before running with NPM Pre Hook
"prestart": "echo The prestart script is running && npm run tsc",
"start":"node index.js",

- Environment Variables in NPM Scripts

....








4-Scripting for Deeloping


5-Scripting for Testing
6-Scripting for Deploying
7-VS Code