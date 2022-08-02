import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorComponent = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        my: 2,
      }}
    >
      <Typography
        textAlign="center"
        justify="center"
        variant="body1"
        fontSize={"1.2rem"}
        sx={{
          color: "#de1f1f",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};
export default ErrorComponent;
