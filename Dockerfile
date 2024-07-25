FROM node:lts-alpine3.19
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["node", "index.js"]