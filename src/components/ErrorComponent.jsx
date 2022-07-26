import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorComponent = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography
        textAlign="center"
        justify="center"
        variant="body1"
        fontSize={"1.9rem"}
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
