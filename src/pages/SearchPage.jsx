import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, Typography } from "@mui/material";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import PhoneCard from "../components/phoneCard";

import { useGetSearchQuery } from "../services/serviceApi";
const SearchPage = () => {
  let params = useParams();
  const { data, isLoading, error } = useGetSearchQuery(params.name);
  return (
    <>
      {params.name ? (
        <Card
          container
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
            {params.name}
          </Typography>
        </Card>
      ) : (
        <></>
      )}

      <Grid item md={12} sm={12} xs={12}>
        <Grid
          container
          spacing={0.5}
          sx={{
            justifyContent: "space-around",
            alignItems: "flex-start",
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
          ) : data?.data?.phones.length > 0 ? (
            data?.data?.phones?.map((data, i) => (
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
            <Grid
              item
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <ErrorComponent message={"Opss, Phone not found"} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default SearchPage;
