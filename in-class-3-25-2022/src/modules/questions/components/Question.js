import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuestion } from "../requests";
// import { Answers } from "./Answers";

const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}

export const Question = () => {
  const params = useParams();
  const { questionId } = params;
  const question = useSelector(getQuestion(questionId));
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;
    dispatch(fetchQuestion(questionId))
    setInitialized(true);
  }, [dispatch, setInitialized, initialized, questionId])


  if (!question) {
    return (
      <Container>
        <h2>That question doesn't exist.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h1">{question.text}</Typography>
      <hr  />
      {/* <Answers questionId={question.id} /> */}
    </Container>
  );
}
