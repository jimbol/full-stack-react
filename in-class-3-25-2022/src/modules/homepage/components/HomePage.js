import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Questions, fetchQuestions } from "../../questions";

const getQuestions = (state) => {
  return Object.values(state.questions.items);
};

const getLoading = (state) => state.questions.loading;

export const HomePage = () => {
  const questionsArray = useSelector(getQuestions);
  const loading = useSelector(getLoading);
  const [initialized, setInitilized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;
    // make a req
    dispatch(fetchQuestions());
    setInitilized(true);
  }, [setInitilized, initialized, dispatch]);

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
      <Questions questions={questionsArray} />
    </div>
  );
};
