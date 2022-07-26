import React from "react";
import { Card, Typography, Box } from "@mui/material";
const dummyBranch = {
  detail: "http://api-mobilespecs.azharimm.site/v2/vivo_iqoo_10_pro-11701",
  image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo10-pro.jpg",
  phone_name: "vivo iQOO 10 Pro",
  slug: "vivo_iqoo_10_pro-11701",
};
const PhoneCard = ({ phone }) => {
  return (
    <Card
      direction="row"
      sx={{ p: ".5em", minWidth: "100%", minHeight: "100%" }}
    >
      <Box
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
