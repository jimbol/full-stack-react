import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { questionActions } from "../slices";

export const Upvotes = ({ question }) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(questionActions.upvote({
          questionId: question.id,
        }));
      }}
    >▲ {question.upvotes || 0}</Button>
  );
}
