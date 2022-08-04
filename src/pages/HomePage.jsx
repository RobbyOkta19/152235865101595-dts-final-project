import { Grid } from "@mui/material";
import React from "react";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import PhoneCard from "../components/phoneCard";
import SideBarSearch from "../components/SideBarSearch";

import { useGetLatestsQuery } from "../services/serviceApi";

const HomePage = () => {
  const { data: dataBrands, isLoading, error } = useGetLatestsQuery();

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
      <Grid item md={3} sm={12} xs={12}>
        <SideBarSearch />
      </Grid>
      <Grid item md={9} sm={12} xs={12}>
        <Grid
          container
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {error ? (
            <>
              <Grid
                item
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <ErrorComponent message={"Opss, Something Wrongs"} />
              </Grid>
            </>
          ) : isLoading ? (
            <>
              <LoadingComponent />
            </>
          ) : (
            dataBrands?.data?.phones?.map((data, i) => (
              <Grid
                key={i}
                item
                xs={4}
                sm={3}
                md={3}
                lg={2}
                sx={{ mx: 0.2, mb: 1 }}
              >
                <PhoneCard key={i} phone={data} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
