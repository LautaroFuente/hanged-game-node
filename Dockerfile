FROM node:22 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --production --silent

COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]