FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

USER node

EXPOSE 3000

CMD [ "node", "server.js" ]