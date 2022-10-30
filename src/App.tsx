import "./App.css";
import AuthenticatedLayout from "./routes/Layouts/AuthenticatedLayout";
import MoviesPage from "./routes/MoviesPage/MoviesPage";
import BookmarksPage from "./routes/BookmarksPage/BookmarksPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import AnonymousLayout from "./routes/Layouts/AnonymousLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthenticatedLayout />}>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Route>
      <Route element={<AnonymousLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
