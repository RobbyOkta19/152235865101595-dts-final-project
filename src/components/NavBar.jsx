import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logOut } from "../authentication/firebase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  { title: "Home", nav: "/" },
  { title: "Favorit", nav: "/favorit" },
];
export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [search, setSearch] = useState();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChangeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const searchPhone = () => {
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logOutEvent = () => {
    console.log("log out");
    handleMenuClose();
    logOut();
  };

  const menuId = "profile-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={logOutEvent}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "mobile-menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages.map((page, id) => (
        <MenuItem key={page.nav} onClick={() => navigate(page.nav)}>
          <Typography textAlign="center">{page.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, px: { xs: 0, md: 0 } }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#00468b",
          px: { md: 10, sm: 2, lg: 10, xs: 2 },
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar width="100%" sx={{ px: { xs: 0, md: 10 } }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              PHONE
            </Typography>
            <Box
              sx={{ flexGrow: 1, px: 4, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page, id) => (
                <MenuItem key={page.nav} onClick={() => navigate(page.nav)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Box>

            <Search sx={{ flexGrow: 1 }}>
              <StyledInputBase
                placeholder="Search…"
                onChange={handleChangeSearch}
                value={search}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <IconButton onClick={searchPhone} sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>

            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              {isLoading ? (
                <></>
              ) : user ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <MenuItem onClick={() => navigate("login")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
