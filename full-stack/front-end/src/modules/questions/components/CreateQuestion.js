import { Typography, TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { createQuestion } from "../requests/createQuestion";

export const CreateQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveQuestion = () => {
    dispatch(createQuestion({ questionText, navigate }));
    setQuestionText('');
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">Ask a Question</Typography>
      <TextField
        multiline
        rows={4}
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value || '')}
      />
      <Button
        onClick={() => saveQuestion()}
      >
        Submit
      </Button>
    </Container>
  );
}
