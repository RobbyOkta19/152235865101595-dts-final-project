import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const DataPhone = ({ name, data }) => {
  return (
    <>
      <Grid
        container
        spacing={0.5}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          alignSelf: "center",
        }}
      >
        <Grid
          item
          md={3}
          lg={3}
          xs={12}
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "center",
          }}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"semi-bold"}>
            {name}
          </Typography>
        </Grid>

        <Grid
          item
          md={1}
          lg={1}
          display={{ xs: "none", sm: "block" }}
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "center",
          }}
        >
          <Typography textAlign={"end"}> :</Typography>
        </Grid>
        <Grid
          item
          md={2}
          lg={5}
          xs={12}
          sx={{
            justifyContent: "flex-enc",
            alignItems: "flex-enc",
            alignSelf: "center",
            ml: 2,
          }}
        >
          <Typography> {data}</Typography>
        </Grid>
      </Grid>
      <Divider></Divider>
    </>
  );
};

export default DataPhone;
