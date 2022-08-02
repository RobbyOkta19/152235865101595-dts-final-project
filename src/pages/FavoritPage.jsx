import React from "react";
import { Grid } from "@mui/material";
import TopList from "../components/TopList";

const FavoritPage = () => {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "center",
      }}
    >
      <Grid item md={6} sm={12} xs={12}>
        <TopList query="top-by-fans" />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TopList query="top-by-interest" />
      </Grid>
    </Grid>
  );
};

export default FavoritPage;
