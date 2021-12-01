import { data } from '../db/data';

export const updateQuestion = {
  method: 'put',
  path: '/question/:id',
  handler: (req, res) => {
    const questionUpdates = req.body.question;
    const id = req.params.id;
    const originalQuestion = data.questions[id];

    if (!originalQuestion) {
      return res.status(404).send({
        message: 'That question does not exit.'
      });
    }

    const updatedQuestion = {
      ...originalQuestion,
      ...questionUpdates,
    };

    data.questions[updatedQuestion.id] = updatedQuestion;

    res.status(200).send({
      quesions: {
        [updatedQuestion.id]: updatedQuestion
      },
    });
  },
};
