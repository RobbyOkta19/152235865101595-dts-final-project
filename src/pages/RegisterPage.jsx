import React, { useState, useEffect } from "react";
import { Email, KeyOutlined, Person, Home } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  InputAdornment,
  Box,
} from "@mui/material";
import ErrorComponent from "../components/ErrorComponent";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, isLoading, error] = useAuthState(auth);

  const [errorRegister, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate, error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await registerDenganEmailDanPassword(
      email,
      password,
      address,
      name
    );

    if (data) {
      setError(data);
      console.log("hasil submit " + data);
    }
  };
  return (
    <Grid
      container
      spacing={0.5}
      elevation={6}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "center",
        my: 8,
        px: { md: "4em", xs: 2 },
        flexDirection: "column",
      }}
    >
      <Grid
        item
        component={Paper}
        sx={{
          justifyContent: "center",
          alignSelf: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignSelf: "center",
            flexDirection: "column",
            py: { md: 12, sm: 2 },
            px: { md: 40, sm: 2 },
          }}
        >
          <Typography
            component="h1"
            textAlign="center"
            justifyContent="center"
            variant="h5"
          >
            Register
          </Typography>
          {errorRegister ?? <ErrorComponent message={errorRegister} />}
          <Box
            component="form"
            noValidate={false}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              required
              fullWidth
              autoComplete="given-name"
              label="Name"
              variant="outlined"
              size="small"
              type="text"
              sx={{
                mb: 2,
              }}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              required
              fullWidth
              autoComplete="address"
              label="Address"
              variant="outlined"
              size="small"
              type="text"
              sx={{
                mb: 2,
              }}
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Home />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              required
              fullWidth
              autoComplete="email"
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              sx={{
                mb: 2,
              }}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              required
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                mb: 2,
              }}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyOutlined />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
