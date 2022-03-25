import * as Question from '../db/questionModel';

export const getQuestions = {
  method: 'get',
  path: '/questions',
  handler: async (req, res) => {
    const questions = await Question.getAll();

    res.status(200);
    res.send({ questions });
  },
};
