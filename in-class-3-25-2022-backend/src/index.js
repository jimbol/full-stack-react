import express from "express";
import * as routes from './routes';

const app = express();
const port = 5000;

app.use(express.json())

Object.values(routes).forEach((route) => {
  console.log(route);
  app[route.method](route.path, route.handler);
});

app.get('/test', (req, res) => {
  res.status(200);
  res.send({ message: 'it worked!'})
});

app.listen(port);
