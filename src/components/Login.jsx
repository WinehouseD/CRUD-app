import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "./auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (useAuth().login(email, password)) {
      setError("");
      navigate("/list");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleChange = (field, value) => {
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
    setError("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <Container>
        <Box textAlign="center" marginBottom="1.25rem">
          <Typography variant="h4" color="gray">
            Welcome to the Login page!
          </Typography>
          <h1 className="fakeData">
            admin@gmail.com <br /> Admin_1
          </h1>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            fullWidth
            value={password}
            style={{ marginTop: "0.6rem" }}
            onChange={(e) => handleChange("password", e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "0.6rem" }}
          >
            Login
          </Button>

          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </Container>
    </div>
  );
};

export default Login;
