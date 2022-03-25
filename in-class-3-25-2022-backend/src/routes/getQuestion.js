import { data } from '../db/data';

export const getQuestion = {
  method: 'get',
  path: '/question/:id',
  handler: (req, res) => {
    const id = req.params.id;

    const question = data.questions[id];

    res.status(200);
    res.send({
      questions: [question]
    });
  },
};
