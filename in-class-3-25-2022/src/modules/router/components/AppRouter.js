import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../homepage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:questionId" element={<h1>Question</h1>} />
      <Route path="/create-question" element={<h1>Create Question</h1>} />
      <Route
        path="*"
        element={<h1>There is nothing here</h1>}
      />
    </Routes>
  );
};
