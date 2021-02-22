FROM node:12-alpine
WORKDIR  /app
COPY . .
RUN npm install --express
CMD ["node", "server.js"]