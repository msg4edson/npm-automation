FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is use to ensure both packege.json AND packege-lock.json are
COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 4005
CMD ["nodemon", "-L", "server.js"]