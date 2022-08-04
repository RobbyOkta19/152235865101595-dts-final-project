import { Card, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetFavoritQuery } from "../services/serviceApi";

import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
const TopList = ({ query }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetFavoritQuery(query);
  return (
    <Card>
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
        <Grid container direction="column" spacing={0.5}>
          <Grid
            item
            md={12}
            sm={12}
            lg={12}
            component={Card}
            sx={{
              px: 3,
              py: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Typography textAlign="center" fontSize={"1.2em"}>
              {data?.data?.title}
            </Typography>{" "}
          </Grid>
          {data?.data?.phones?.map((phone, i) => (
            <>
              <Grid
                item
                key={i}
                component={Card}
                sx={{ px: 3, py: 1 }}
                onClick={() => navigate(`/detail/${phone.slug}`)}
              >
                <Typography key={i} sx={{ px: 3, py: 1 }}>
                  {`${i + 1}. ${phone.phone_name}`}
                </Typography>
              </Grid>
              <Divider />
            </>
          ))}
        </Grid>
      )}
    </Card>
  );
};
export default TopList;
