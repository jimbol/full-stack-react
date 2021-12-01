import * as Question from '../db/questionModel';

export const createQuestion = {
  method: 'post',
  path: '/question',
  handler: async (req, res) => {
    const newQuestion = req.body.question;
    await Question.insertOne(newQuestion);

    const questions = await Question.getAll();
    res.status(200);
    res.send({
      questions,
    });
  },
};
