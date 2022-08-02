import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailQuery } from "../services/serviceApi";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import PhotoCard from "../components/detail/PhotoCard";
import DataPhone from "../components/detail/DataPhone";

const DetailPage = () => {
  let params = useParams();
  const { data: dataPhone, isLoading, error } = useGetDetailQuery(params.phone);

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
      <Grid item md={3} xs={12} sx={{ p: 2 }}>
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
          <PhotoCard
            thumbnail={dataPhone.data.thumbnail}
            phoneName={dataPhone.data.phone_name}
          />
        )}
      </Grid>
      <Grid
        item
        md={9}
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#ffffff" }} />}
            aria-controls="panel-about-content"
            id="panel-about"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#010DB0",
              borderBottom: "1px solid #12738E",
              marginBottom: -1,
              color: "#666666",
              minHeight: 56,
              "&$expanded": {
                minHeight: 56,
              },
            }}
          >
            <Typography color="white" fontSize={"1.2rem"} align="center">
              About Phone
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 2 }}>
            <DataPhone name={"Brand"} data={dataPhone?.data?.brand} />
            <DataPhone name={"Name"} data={dataPhone?.data?.phone_name} />
            <DataPhone
              name={"Release Date"}
              data={dataPhone?.data?.release_date}
            />{" "}
            <DataPhone name={"Dimension"} data={dataPhone?.data?.dimension} />{" "}
            <DataPhone name={"Operation System"} data={dataPhone?.data?.os} />{" "}
            <DataPhone name={"Storage"} data={dataPhone?.data?.storage} />{" "}
          </AccordionDetails>
        </Accordion>
        {dataPhone?.data?.specifications?.map((data, i) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#ffffff" }} />}
              aria-controls="panel-about-content"
              id="panel-about"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: "#010DB0",
                borderBottom: "1px solid #12738E",
                marginBottom: -1,
                color: "#666666",
                minHeight: 56,
                "&$expanded": {
                  minHeight: 56,
                },
              }}
            >
              <Typography color="white" fontSize={"1.2rem"} align="center">
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 2 }}>
              {data?.specs?.map((specs, i) => (
                <DataPhone key={i} name={specs.key} data={specs.val[0]} />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};
export default DetailPage;
