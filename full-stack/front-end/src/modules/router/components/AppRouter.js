import {
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from '../../homepage';
import { Question, CreateQuestion, MyQuestions } from '../../questions';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<Question />} />
      <Route path="/create-question" element={<CreateQuestion />} />
      <Route path="/my-questions" element={<MyQuestions />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
