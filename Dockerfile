FROM node:18-alpine

RUN npm install -g typescript

WORKDIR /urs/src/index.ts

COPY package*.json ./

COPY . .

RUN npm i

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
