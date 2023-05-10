FROM node:17-alpine as development

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
