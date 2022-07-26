import React from "react";
import { Grid, Typography, Card } from "@mui/material";

import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import PhoneCard from "../components/phoneCard";
import SideBarSearch from "../components/SideBarSearch";
import { useGetBrandQuery } from "../services/serviceApi";
import { useParams } from "react-router-dom";
const BrandPage = () => {
  let params = useParams();
  const { data: dataBrands, isLoading, error } = useGetBrandQuery(params.brand);

  return (
    <>
      {dataBrands?.data?.title ? (
        <Card
          item
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            mb: 1,
            p: 2,
          }}
        >
          <Typography
            textAlign="center"
            justify="center"
            variant="body2"
            fontSize={"1.2rem"}
          >
            {dataBrands?.data?.title}
          </Typography>
        </Card>
      ) : (
        <></>
      )}
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
              justifyContent: "space-around",
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
                <Grid key={i} item xs={4} sm={3} md={3} lg={2} sx={{ mx: 0.5 }}>
                  <PhoneCard key={i} phone={data} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BrandPage;
