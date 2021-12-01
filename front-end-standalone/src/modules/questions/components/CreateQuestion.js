import { Typography, TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router";

import { questionActions } from '../slices';
import { getCurrentUser } from "./selectors";

export const CreateQuestion = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);

  const saveQuestion = () => {
    const id = uuid();
    dispatch(questionActions.addQuestions([{
      id,
      text: newQuestion,
      user,
    }]));
    setNewQuestion('');
    navigate(`/question/${id}`);
  }

  if (!user) {
    return (
      <Container style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h2">Please select a user</Typography>
      </Container>
    );
  }

  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">Ask a Question</Typography>
      <TextField
        multiline
        rows={4}
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value || '')}
      />
      <Button
        onClick={() => saveQuestion()}
      >
        Submit
      </Button>
    </Container>
  );
}
