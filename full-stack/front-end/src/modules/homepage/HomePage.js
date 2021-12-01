import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Questions } from '../questions';
import { fetchQuestions } from '../questions/requests/fetchQuestions';

const getQuestions = (state) => {
  return Object.values(state.questions.items);
};

const getLoading = (state) => {
  return state.questions.loading;
};

export const HomePage = () => {
  const latestQuestions = useSelector(getQuestions);
  const loading = useSelector(getLoading);
  const [initialized, setInitialization] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return false;
    dispatch(fetchQuestions());
    setInitialization(true);
  }, [dispatch, initialized, setInitialization]);

  if (loading) {
    return (
      <div>
        <Typography variant="h1">Latest Questions</Typography>
        <Typography variant="h4">Loading...</Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h1">Latest Questions</Typography>
      <Questions questions={latestQuestions}/>
    </div>
  );
}
