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

create a file Dockerfile

paste that:

FROM node:12



*# Create app directory*

WORKDIR /usr/src/app



*# Install app dependencies*

*# A wildcard is use to ensure both packege.json AND packege-lock.json are*

*# where avaliable (npm@5+)*

COPY package*.json ./

if needed create a file .dockerignore



RUN npm install



*# Bundle app source*

COPY . .



EXPOSE 4005

CMD ["node", "server.js"]



docker build -t msgedsonio/node-web-app .

docker image ls

docker run -p 4005:4005 -d --name webapp msgedsonio/node-web-app



- Containers: Automating Docker Build Taks

 "scripts": {

  "docker:build":"docker build -t msgedsonio/node-web-app .",

  "docker:run":"docker run -p 4005:4005 -d --name webapp msgedsonio/node-web-app",





**4-Scripting for Developing**

- Automating Node.js Development Tasks

  https://www.npmjs.com/package/nodemon

  npm install --save-dev nodemon

   "scripts": {

    "start": "node index.js",

    "start:dev":"nodemon index.js",

  npm run start:dev

  

- TypeScript Development Tasks

npm install --save-dev nodemon

"prestart:dev": "npm run tsc -- --watch",

  "start:dev": "nodemon index.js",

- Automating TypeScript Development Tasks

https://www.npmjs.com/package/npm-run-all

npm install npm-run-all --save-dev

"scripts": {

  "tsc": "tsc",

  "prestart": "echo The prestart script is running && npm run tsc",

  "start": "node index.js",

  "build:watch": "npm run tsc -- --watch",

  "start:dev": "nodemon index.js",

  "start:dev:watch":"npm-run-all tsc --parallel start:dev build:watch",

  "test": "echo \"Error: no test specified\" && exit 1"

npm run start:dev:watch

- Bonus TypeScript Development Tasks

https://www.npmjs.com/package/ts-node-dev

"start:tsdev":"ts-node-dev index.ts",

npm run start:tsdev

- Webpack Development Tasks

"build:dev":"webpack --watch",

npm i -D nodemon

"star:dev":"nodemon dist/app.js",

npm install npm-run-all --save-dev

"scripts": {

  "test": "echo \"Error: no test specified\" && exit 1",

  "build": "webpack",

  "build:dev": "webpack --watch",

  "start": "npm-run-all build --parallel start:dev build:watch",

  "star:dev":"nodemon dist/app.js",

  "prestart": "echo prestart scrip is running ... && npm run build"

 },

- Automating Webpack Development Tasks

https://www.npmjs.com/package/browser-sync





**5-Scripting for Testing**



**6-Scripting for Deploying**



**7-VS Code**

