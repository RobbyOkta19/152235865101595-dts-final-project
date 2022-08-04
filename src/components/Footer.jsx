import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#00468b",
        mt: 4,
        py: 2,
        px: { md: 10, sm: 2, lg: 10, xs: 2 },
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Grid item>
        <Typography variant="body1" color="white" align="center">
          Robby Oktahidayat
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
