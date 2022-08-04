import { Card, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db } from "../authentication/firebase";
import DataComponent from "../components/detail/DataComponent";

import { query, onSnapshot, collection, where } from "firebase/firestore";
import LoadingComponent from "../components/LoadingComponent";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (user) {
      const dbUser = collection(db, "users");
      const q = query(dbUser, where("uid", "==", user.uid));
      onSnapshot(q, (querySnapshot) => {
        setDataUser(querySnapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [user]);
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
      <Card
        sx={{
          m: 2,
          px: { md: 10, sm: 2, xs: 2 },
          py: 2,
          mb: 4,
          width: { md: "80%", xs: "100%" },
        }}
      >
        {dataUser ? (
          <>
            <Typography
              fontSize={"1.3em"}
              fontStyle="semi-bold"
              textAlign="center"
            >
              {"PROFILE"}
            </Typography>
            <DataComponent name={"Name"} data={dataUser[0].name} />
            <DataComponent name={"Email"} data={dataUser[0].email} />
            <DataComponent name={"Address"} data={dataUser[0].address} />
          </>
        ) : (
          <>
            <LoadingComponent></LoadingComponent>{" "}
          </>
        )}
      </Card>
    </Grid>
  );
};

export default ProfilePage;
