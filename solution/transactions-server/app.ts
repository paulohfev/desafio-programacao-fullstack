import express, { Express, Request, Response } from 'express';

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const sequelize = require('./database.config');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('hello there');
});

sequelize
  .sync()
  .then(() => {
    app.listen(port);
  });