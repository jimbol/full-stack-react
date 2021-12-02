import { ObjectId } from 'mongodb';
import { collection } from "./connect"

export const insertOne = async (question) => {
  const questions = await collection('questions');
  return await questions.insertOne(question);
}

export const getAll = async () => {
  const questions = await collection('questions');
  return await questions.find({}).toArray();
};

export const getOne = async (questionId) => {
  const questions = await collection('questions');
  return await questions.findOne({ _id: ObjectId(questionId) });
};

export const deleteOne = async (questionId) => {
  const questions = await collection('questions');
  return await questions.deleteOne({ _id: ObjectId(questionId) });
};

export const updateOne = async (questionId, updates) => {
  const questions = await collection('questions');
  const result = await questions.updateOne(
    { _id: ObjectId(questionId) },
    {
      $set: updates,
    }
  );
  return result;
};
