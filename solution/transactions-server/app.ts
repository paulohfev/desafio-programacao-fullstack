import express, { Express, Request, Response } from 'express';
import sequelize from './config/database.config';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

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