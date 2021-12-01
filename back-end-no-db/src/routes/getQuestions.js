import { data } from '../db/data';

export const getQuestions = {
  method: 'get',
  path: '/questions',
  handler: (req, res) => {
    res.status(200);
    res.send(data);
  },
};
