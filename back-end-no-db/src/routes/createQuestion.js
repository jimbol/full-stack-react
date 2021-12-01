import { data } from '../db/data';
import { v4 as uuid } from 'uuid';

export const createQuestion = {
  method: 'post',
  path: '/question',
  handler: (req, res) => {
    const newQuestion = req.body.question;
    newQuestion.id = uuid();

    data.questions[newQuestion.id] = newQuestion;

    res.status(200);
    res.send({
      quesions: {
        [newQuestion.id]: newQuestion
      },
    });
  },
};
