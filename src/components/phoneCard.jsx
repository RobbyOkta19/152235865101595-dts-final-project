import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PhoneCard = ({ phone }) => {
  const navigate = useNavigate();
  return (
    <Card
      direction="row"
      elevation={4}
      sx={{ p: ".5em", minWidth: "100%", minHeight: "100%" }}
    >
      <Box
        onClick={() => navigate(`/detail/${phone.slug}`)}
        container
        justifyContent="center"
        justifyItems="center"
        sx={{
          width: "100%",
          height: { lg: "250px", md: "250px", sm: "200px", xs: "200px" },
        }}
      >
        <img src={`${phone.image}`} width={"100%"} height={"90%"} alt="" />
        <Typography
          textAlign="center"
          justify="center"
          variant="body1"
          fontSize={"0.9rem"}
        >
          {phone.phone_name}
        </Typography>
      </Box>
    </Card>
  );
};
export default PhoneCard;
