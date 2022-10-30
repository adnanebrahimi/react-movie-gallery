import './App.css';
import AuthenticatedLayout from './routes/Layouts/AuthenticatedLayout';
import MoviesPage from './routes/MoviesPage/MoviesPage';
import BookmarksPage from './routes/BookmarksPage/BookmarksPage';
import LoginPage from './routes/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route element={<AuthenticatedLayout />}>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
  </Routes>
  );
}

export default App;
