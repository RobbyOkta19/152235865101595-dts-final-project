import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import BrandPage from "./BrandPage";

const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          mx: 0,
          width: "100%",
          minHeight: "100vh",

          background: "linear-gradient(0deg, #3250FD 30%, #010348 90%)",
        }}
      >
        <Box
          sx={{
            pt: ".5em",
            px: { md: 10, sm: 10, xs: 3 },
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: "center",
          }}
        >
          <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/latest" element={<HomePage />}></Route>
              <Route path="/brand/:brand" element={<BrandPage />}></Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
