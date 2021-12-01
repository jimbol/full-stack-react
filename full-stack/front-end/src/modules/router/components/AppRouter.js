import {
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from '../../homepage';
import { Question, CreateQuestion } from '../../questions';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<Question />} />
      <Route path="/create-question" element={<CreateQuestion />} />
      <Route
        path="*"
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
