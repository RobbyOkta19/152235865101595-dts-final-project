import { Grid, ThemeProvider } from "@mui/material";
import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};
function App() {
  return <MainPage />;
}

export default App;
