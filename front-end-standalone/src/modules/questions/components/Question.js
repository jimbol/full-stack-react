import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Answers } from "./Answers";
import { Upvotes } from "./Upvotes";

const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}

export const Question = () => {
  const params = useParams();
  const { questionId } = params;
  const question = useSelector(getQuestion(questionId));

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
      <Typography variant="h3">Asked by {question.user}</Typography>
      <Upvotes question={question} />
      <hr  />
      <Answers questionId={question.id} />
    </Container>
  );
}
