import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { questionActions } from '../slices';
import { getQuestion } from "./selectors";

export const CreateAnswer = ({ questionId }) => {
  const [newAnswer, setNewAnswer] = useState('');
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));

  const addAnswer = () => {
    const id = uuid();
    const answer = {
      id,
      text: newAnswer,
    };

    dispatch(questionActions.addAnswer({
      questionId: question.id,
      answer,
    }));

    setNewAnswer('');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        multiline
        placeholder={"Answer this question"}
        rows={4}
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value || '')}
      />
      <Button
        onClick={() => addAnswer()}
      >
        Submit
      </Button>
    </div>
  );
}
