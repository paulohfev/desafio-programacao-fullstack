FROM node:17-alpine as development

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 4000

CMD ["npm", "start"]