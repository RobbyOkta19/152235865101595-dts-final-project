import {
  Card,
  Grid,
  Box,
  FormControl,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useGetBrandsQuery } from "../services/serviceApi";

const SideBarSearch = () => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState("");
  const { data: listBrands, isLoading, error } = useGetBrandsQuery();
  function getBrandPhone(e) {
    e.preventDefault();
    if (brand) {
      navigate(`/brand/${brand}`);
    }
  }
  return (
    <Card>
      {error ? (
        <>
          <Grid
            container
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
        <>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              p: 2,
            }}
          >
            <Grid item md={12} sm={12} xs={12}>
              <FormControl sx={{ width: "100%" }} size="small">
                <Autocomplete
                  id="brand-select"
                  options={listBrands?.data}
                  autoHighlight
                  onChange={(event, newValue) => {
                    setBrand(newValue.brand_slug);
                  }}
                  getOptionLabel={(option) => option.brand_name}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.brand_name}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Brand"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormControl sx={{ width: "50%" }} size="small">
                <Button
                  onClick={getBrandPhone}
                  sx={{ mt: 1 }}
                  variant="contained"
                >
                  Pilih
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </>
      )}
    </Card>
  );
};

export default SideBarSearch;
