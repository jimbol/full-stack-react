import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../slices";
import { getCurrentUser } from "./selectors";

export const Upvotes = ({ question }) => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const userUpvoted = (question.upvotes || {})[user];

  return (
    <Button
      style={{
        color: userUpvoted ? 'orange' : 'black'
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (userUpvoted) {
          dispatch(questionActions.removeUpvote({
            questionId: question.id,
            user,
          }));
        } else {
          dispatch(questionActions.upvote({
            questionId: question.id,
            user,
          }));
        }
      }}
    >▲ {Object.keys(question.upvotes || {}).length}</Button>
  );
}
