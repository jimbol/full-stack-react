import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { questionActions } from '../slices';
import { getCurrentUser, getQuestion } from "./selectors";

export const CreateAnswer = ({ questionId }) => {
  const [newAnswer, setNewAnswer] = useState('');
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));
  const user = useSelector(getCurrentUser);

  const addAnswer = () => {
    const id = uuid();
    const answer = {
      id,
      text: newAnswer,
      user,
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
        disabled={!user}
        placeholder={user ? "Answer this question" : "Select a user"}
        rows={4}
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value || '')}
      />
      <Button
        disabled={!user}
        onClick={() => addAnswer()}
      >
        Submit
      </Button>
    </div>
  );
}
