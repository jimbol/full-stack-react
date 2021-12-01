import { Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { deleteQuestion } from "../requests/deleteQuestion";
import { Answers } from "./Answers";
import { getCurrentUser } from "./selectors";
import { Upvotes } from "./Upvotes";

const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}

export const Question = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { questionId } = params;
  const question = useSelector(getQuestion(questionId));
  const currentUser = useSelector(getCurrentUser);
  const navigate = useNavigate();

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
      <Button
        disabled={question.user !== currentUser}
        onClick={() => {
          dispatch(deleteQuestion(question.id));
          navigate('/');
        }}
      >
        Delete
      </Button>
      <hr  />
      <Answers questionId={question.id} />
    </Container>
  );
}
