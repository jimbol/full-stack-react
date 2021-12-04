import express from 'express';
import * as routes from './routes';
import * as db from './db/connect';
import cors from 'cors';

const DB_URL = 'mongodb://127.0.0.1:27017';

const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use(cors({
  origin: process.env.client || 'http://localhost:3000',
}));

Object.values(routes).forEach((route) => {
  console.log(route);
  app[route.method](route.path, route.handler);
});

app.get('/test', (req, res) => res.send({ success: true }));

const start = async () => {
  await db.connect(DB_URL);
  app.listen(port);
  console.log(`Express started on port ${port}`);
};

start();


