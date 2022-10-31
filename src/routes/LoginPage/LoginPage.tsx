import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/LoginRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function LoginPage() {
  const useAuth = useAuthContext();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const vertical = 'bottom';
  const horizontal = 'center';
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  function authenticate() {
    if (username) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        useAuth.dispatch({ type: "login", username: username });
        navigate(from, { replace: true });
      }, 2000);
    } else {
      setOpenSnackbar(true);
    }
  }

  return (
    <div className="flex flex-col justify-between h-28">
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Enter Username"
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <LoadingButton
        loading={loading}
        loadingPosition="start"
        startIcon={<LoginIcon />}
        variant="outlined"
        onClick={() => authenticate()}
      >
        Login
      </LoadingButton>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        key= {vertical + horizontal}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          You must filled the username!
        </Alert>
      </Snackbar>
    </div>
  );
}
