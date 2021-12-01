import { Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Questions } from './Questions';

const getMyQuestions = (state) => {
  return Object.values(state.questions.items)
  .filter((question) => question.user === state.currentUser.user);
};

export const MyQuestions = () => {
  const myQuestions = useSelector(getMyQuestions);

  return (
    <Container>
      <Typography variant="h2">My Questions</Typography>
      <Questions questions={myQuestions}/>
    </Container>
  );
}
