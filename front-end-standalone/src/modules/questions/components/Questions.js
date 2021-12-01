import { Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Upvotes } from "./Upvotes";

// used in MyQuestions and in HomePage
export const Questions = ({ questions }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h2">Questions</Typography>
      <Grid container spacing={2}>
        {
          questions.map((question) => {
            return (
              <Grid
                item
                xs={4}
                key={question.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/question/${question.id}`)
                }
              >
                <Card style={{ padding: 12, flexDirection: 'row', display: 'flex'}}>
                  <Upvotes question={question} />
                  <Typography variant="h6">{question.text}</Typography>
                </Card>
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}
