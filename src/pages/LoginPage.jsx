import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Email, KeyOutlined } from "@mui/icons-material";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
  InputAdornment,
} from "@mui/material";

import ErrorComponent from "../components/ErrorComponent";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, loginDenganEmailDanPassword } from "../authentication/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setError] = useState("");

  const [user, isLoading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await loginDenganEmailDanPassword(email, password);

    if (data) {
      setError(data);
      console.log("hasil submit " + data);
    }
  };

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate, error]);
  return (
    <Grid
      container
      spacing={0.5}
      elevation={6}
      square
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
          <Grid item>
            <Typography component="h1" justifyContent="center" variant="h5">
              Sign in
            </Typography>
            {errorLogin ? (
              <Grid
                item
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <ErrorComponent message={errorLogin} />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
          <Box
            component="form"
            noValidate={false}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              item
              required
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              autoComplete="email"
              id="email"
              sx={{
                my: 2,
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
              autoComplete="password"
              id="password"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography
              textAlign="center"
              justify="center"
              variant="body2"
              fontSize={"1rem"}
            >
              Dont have account, please Register
            </Typography>
            <Button
              onClick={() => navigate("/register")}
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

export default LoginPage;
