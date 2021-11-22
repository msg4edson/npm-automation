# npm-automation

**2-Getting Started Creating NPM Scripts**

- NPM Run
  npm run

- Lifecycle Scripts vc. Custom Scripts

https://docs.npmjs.com/cli/v8/using-npm/scripts

- NPM Test
  npm run test
  npm test

- NPM Start
  npm start

**3-Scripting for Building**



- CLI Tools via NPM Scripts
  https://docs.npmjs.com/cli/v8/commands/npm-run-script

By running tsc:

tsc
bash: tsc: command not found



- TypeScript: Compile with NPM Scripts
  "scripts": {
      "tsc":"tsc",

try 
npm run tsc



- TypeScript: Passing Arguments in  NPM Scripts
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
  npm install -D cross-env
  "start": "cross-en PORT=4000 node index.js",

- Using NPM Config as Environment Variables

in package.json
"config": {
    "port":5000
  },

in index.ts
to: const port = process.env.PORT || 4005;
from: const port = process.env.npm_package_config_port || 4005;
https://docs.npmjs.com/cli/v8/using-npm/scripts

- CSS Pre-processors: Building with NPM Scripts

npm install -D sass



"scripts": {

  "sass":"sass styles.sass styles.css",

  "prestart": "npm run sass",



- Bundling and Minifying: Webpack Build pack

npx webpack

"scripts": {

  "test": "echo \"Error: no test specified\" && exit 1",

  "build":"webpack"

------

"scripts": {

  "test": "echo \"Error: no test specified\" && exit 1",

  "build":"webpack",

  "start": "node dist/app.js"

----

final version:

"scripts": {

  "test": "echo \"Error: no test specified\" && exit 1",

  "build":"webpack",

  "start": "node dist/app.js",

  "prestart": "echo prestart scrip is running ... && npm run build"

 },

- Front-end Frameworks: Angular Build Tasks

ng new

create a file ./server/server.js

In angular.json

"outputPath": "dist",

run npm run build

change as follow:

"start": "node server/server.js",

  "start-ng": "ng serve"

npm start

- Front-end Frameworks: Automating Angular Build Tasks



"scripts": {

  "ng": "ng",

  "start": "node server/server.js",

  "prestart": "npm run build",

  "start-ng": "ng serve",

- Containers: Docker Build Taks

...



- Containers: Automating Docker Build Taks







**4-Scripting for Developing**



**5-Scripting for Testing**



**6-Scripting for Deploying**



**7-VS Code**

