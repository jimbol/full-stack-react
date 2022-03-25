import { Typography, TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router";

import { questionActions } from '../slices';

export const CreateQuestion = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveQuestion = () => {
    const id = uuid();
    dispatch(questionActions.addQuestions([{
      id,
      text: newQuestion,
    }]));
    setNewQuestion('');
    navigate(`/question/${id}`);
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
