import * as Question from '../db/questionModel';

export const getQuestion = {
  method: 'get',
  path: '/question/:id',
  handler: async (req, res) => {
    const id = req.params.id;

    const question = await Question.getOne(id);

    res.status(200);
    res.send({ questions: [question] });
  },
};
