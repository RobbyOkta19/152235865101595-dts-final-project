import React, { useState } from "react";
import { Grid, Typography, Card, Pagination } from "@mui/material";

import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import PhoneCard from "../components/phoneCard";
import SideBarSearch from "../components/SideBarSearch";
import { useGetBrandQuery } from "../services/serviceApi";
import { useParams } from "react-router-dom";
const BrandPage = () => {
  let params = useParams();
  const [page, setPage] = useState(1);
  const {
    data: dataBrands,
    isLoading,
    error,
  } = useGetBrandQuery({ brand: params.brand, page: page });

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      {dataBrands?.data?.title ? (
        <Card
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
      {dataBrands?.data?.last_page > 1 ? (
        <Grid
          container
          component={Card}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            py: 2,
            my: 2,
          }}
        >
          <Pagination
            count={dataBrands?.data?.last_page}
            onChange={handleChange}
          />
        </Grid>
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
            ) : dataBrands?.data?.phones.length > 0 ? (
              dataBrands?.data?.phones?.map((data, i) => (
                <Grid
                  item
                  key={i}
                  xs={4}
                  sm={3}
                  md={3}
                  lg={2}
                  sx={{ mx: 0.2, mb: 1 }}
                >
                  <PhoneCard key={i} phone={data} />
                </Grid>
              ))
            ) : (
              <ErrorComponent message={"Data not Found"} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BrandPage;
