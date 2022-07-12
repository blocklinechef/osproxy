FROM node:latest

WORKDIR /usr/source/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "start"]
