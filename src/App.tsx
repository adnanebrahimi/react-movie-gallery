import "./App.css";
import AuthenticatedLayout from "./routes/Layouts/AuthenticatedLayout";
import MoviesPage from "./routes/MoviesPage/MoviesPage";
import BookmarksPage from "./routes/BookmarksPage/BookmarksPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AnonymousLayout from "./routes/Layouts/AnonymousLayout";
import { useAuthContext } from "./contexts";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuthContext();
  let location = useLocation();

  if (!auth.state.username) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return children;
}

function App() {
  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <AuthenticatedLayout />
          </RequireAuth>
        }
      >
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
