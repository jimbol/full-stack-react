import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../requests/updateQuestion";

export const Upvotes = ({ question }) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();

        dispatch(updateQuestion({
          ...question,
          upvotes: (question.upvotes || 0) + 1,
        }));
      }}
    >▲ {question.upvotes || 0}</Button>
  );
}
