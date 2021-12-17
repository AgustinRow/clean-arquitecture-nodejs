FROM node:16.13.0-alpine

ENV WAIT_VERSION 2.7.2


RUN apk update && apk upgrade && apk add bash

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD npm run dev






