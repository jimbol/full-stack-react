import * as Question from '../db/questionModel';

export const deleteQuestion = {
  method: 'delete',
  path: '/question/:id',
  handler: async (req, res) => {
    const id = req.params.id;
    await Question.deleteOne(id);
    res.status(200).send({
      deleted: true,
    });
  },
};
