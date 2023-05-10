FROM node:17-alpine as development

ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 4000

CMD ["npm", "start"]