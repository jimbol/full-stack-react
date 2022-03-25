import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Questions } from "../../questions";

const getQuestions = (state) => {
  return Object.values(state.questions.items);
};

export const HomePage = () => {
  const questionsArray = useSelector(getQuestions);

  return (
    <div>
      <Typography variant="h1">Latest Questions</Typography>
      <Questions questions={questionsArray} />
    </div>
  );
};
