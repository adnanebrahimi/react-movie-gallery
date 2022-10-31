import { Logout } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";

export default function Sidebar(props: { openSidebar: boolean }) {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  function logout() {
    authContext.dispatch({ type: "logout" });
    navigate("/");
  }
  return (
    <aside
      className={`top-12 right-0 w-[90vw] md:w-[20vw] bg-blue-900  text-blue-200 fixed  h-full z-40  ease-in-out duration-300 ${
        props.openSidebar ? "translate-x-0 " : "translate-x-full"
      }
        flex flex-col items-center gap-4 pt-4
        `}
    >
      <Button
        startIcon={<Logout />}
        variant="contained"
        onClick={() => logout()}
      >
        Logout
      </Button>
      <h3>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : undefined)}
          to={"/"}
        >
          Movie
        </NavLink>
      </h3>
      <h3>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : undefined)}
          to={"/bookmarks"}
        >
          Bookmark
        </NavLink>
      </h3>
    </aside>
  );
}
