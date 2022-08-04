import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import BrandPage from "./BrandPage";
import DetailPage from "./DetailPage";
import FavoritPage from "./FavoritPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import SearchPage from "./SearchPage";
import Footer from "../components/Footer";
import ProfilePage from "./ProfilePage";

const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          mx: 0,
          width: "100%",
          minHeight: "100vh",

          background: "linear-gradient(0deg, #ffffff 30%, #cde0f9)",
        }}
      >
        <BrowserRouter>
          <NavigationBar></NavigationBar>

          <Box
            sx={{
              pt: ".5em",
              px: { md: 8, sm: 8, xs: 3 },
              my: { md: 8, sm: 7, xs: 7 },
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "center",
            }}
          >
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/favorit" element={<FavoritPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/brand/:brand" element={<BrandPage />}></Route>
              <Route path="/detail/:phone" element={<DetailPage />}></Route>
              <Route path="/search/:name" element={<SearchPage />}></Route>
            </Routes>
          </Box>
          <Footer></Footer>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default MainPage;
