import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
    }
  };

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    const username = localStorage.getItem("username");
    return (
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <h2>Welcome back, {username}!</h2>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
