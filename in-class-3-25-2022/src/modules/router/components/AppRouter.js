import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../homepage';
import { CreateQuestion, Question } from '../../questions';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<Question />} />
      <Route path="/create-question" element={<CreateQuestion />} />
      <Route
        path="*"
        element={<h1>There is nothing here</h1>}
      />
    </Routes>
  );
};
