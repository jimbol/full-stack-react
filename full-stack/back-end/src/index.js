import express from 'express';
import * as routes from './routes';
import * as db from './db/connect';
import cors from 'cors';

const DB_URL = 'mongodb://127.0.0.1:27017';

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

Object.values(routes).forEach((route) => {
  console.log(route);
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect(DB_URL);
  app.listen(port);
  console.log(`Express started on port ${port}`);
};

start();


