FROM node:15-alpine AS builder
WORKDIR /app
COPY ./package*.json ./
RUN apk add -U graphicsmagick && npm install --production
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]
