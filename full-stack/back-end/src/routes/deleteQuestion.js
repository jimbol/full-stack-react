import * as Question from '../db/questionModel';

export const deleteQuestion = {
  method: 'delete',
  path: '/question/:id',
  handler: async (req, res) => {
    const id = req.params.id;
    const result = await Question.deleteOne(id);
    console.log(result);
    res.status(200).send({
      deleted: true,
    });
  },
};
