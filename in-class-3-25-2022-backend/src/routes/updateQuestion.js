import * as Question from '../db/questionModel';

export const updateQuestion = {
  method: 'put',
  path: '/question/:id',
  handler: async (req, res) => {
    const questionUpdates = req.body.question;
    const id = req.params.id;

    const { matchedCount } = await Question.updateOne(id, questionUpdates);

    if (matchedCount === 0) {
      return res.status(404).send({
        message: 'That question does not exit.'
      });
    }

    const questions = await Question.getAll();

    res.status(200).send({
      questions,
    });
  },
};
