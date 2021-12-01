import { Typography, Card } from "@mui/material";
import { useSelector } from 'react-redux';

import { CreateAnswer } from "./CreateAnswer";
import { getQuestion } from "./selectors";

export const Answers = ({ questionId }) => {
  const question = useSelector(getQuestion(questionId));
  const answers = Object.values(question.answers || {});

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">Answers:</Typography>
      {
        answers.length ? null : (
          <Typography variant="h4">No answers yet.</Typography>
        )
      }
      {
        answers.map((answer) => (
          <Card style={{ padding: 12 }} key ={answer.id}>
            <Typography variant="h5">{answer.text}</Typography>
          </Card>
        ))
      }
      <CreateAnswer questionId={questionId} />
    </div>
  );
}
