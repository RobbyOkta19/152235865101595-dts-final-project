import React from "react";
import { Grid, Box, Typography, Card } from "@mui/material";

const PhotoCard = ({ thumbnail, phoneName }) => {
  return (
    <Grid
      item
      component={Card}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        p: 2,
      }}
    >
      <Box
        container
        justifyContent="center"
        justifyItems="center"
        sx={{
          width: "100%",
          // height: { lg: "250px", md: "250px", sm: "200px", xs: "200px" },
        }}
      >
        <img src={`${thumbnail}`} width={"100%"} height={"90%"} alt="" />
        <Typography
          textAlign="center"
          justify="center"
          variant="body1"
          fontSize={"0.9rem"}
        >
          {phoneName}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PhotoCard;
