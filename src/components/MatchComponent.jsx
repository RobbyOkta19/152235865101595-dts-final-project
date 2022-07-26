import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const dummyMatch = {
  area: {
    id: 2224,
    name: "Spain",
    code: "ESP",
    flag: "https://crests.football-data.org/760.svg",
  },
  competition: {
    id: 2014,
    name: "Primera Division",
    code: "PD",
    type: "LEAGUE",
    emblem: "https://crests.football-data.org/PD.png",
  },
  season: {
    id: 380,
    startDate: "2021-08-13",
    endDate: "2022-05-22",
    currentMatchday: 38,
    winner: null,
  },
  id: 331007,
  utcDate: "2022-05-12T17:00:00Z",
  status: "FINISHED",
  matchday: 36,
  stage: "REGULAR_SEASON",
  group: null,
  lastUpdated: "2022-06-26T08:20:12Z",
  homeTeam: {
    id: 92,
    name: "Real Sociedad de Fútbol",
    shortName: "Real Sociedad",
    tla: "RSO",
    crest: "https://crests.football-data.org/92.svg",
  },
  awayTeam: {
    id: 264,
    name: "Cádiz CF",
    shortName: "Cádiz CF",
    tla: "CAD",
    crest: "https://crests.football-data.org/264.png",
  },
  score: {
    winner: "HOME_TEAM",
    duration: "REGULAR",
    fullTime: {
      home: 3,
      away: 0,
    },
    halfTime: {
      home: 1,
      away: 0,
    },
  },
  odds: {
    msg: "Activate Odds-Package in User-Panel to retrieve odds.",
  },
  referees: [
    {
      id: 81,
      name: "Juan Martínez",
      type: "REFEREE",
      nationality: "Spain",
    },
  ],
};
const MatchComponent = ({ matche }) => {
  return (
    <Card variant="outlined" sx={{ p: ".5em", m: { md: 2, sm: 5 } }}>
      <Grid container md={12}>
        <Grid
          container
          md={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{ width: 20, height: 20 }}
            alt="Remy Sharp"
            src={dummyMatch.competition.emblem}
          />
          <Typography alignSelf="center" variant="body1" fontSize={"0.9rem"}>
            {dummyMatch.competition.name}{" "}
          </Typography>
        </Grid>
        <Grid
          container
          md={6}
          sm={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            size={{ width: 20, height: 20 }}
            src={dummyMatch.homeTeam.crest}
          />
          <Typography alignSelf="center" variant="subtitle2" color="black">
            {dummyMatch.homeTeam.name}
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography alignSelf="center" variant="subtitle2" color="black">
                {`( ${dummyMatch.score.fullTime.home} )`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          md={6}
          sm={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            size={{ width: 20, height: 20 }}
            src={dummyMatch.awayTeam.crest}
          />
          <Typography alignSelf="center" variant="subtitle2" color="black">
            {dummyMatch.awayTeam.name}
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography alignSelf="center" variant="subtitle2" color="black">
                {`( ${dummyMatch.score.fullTime.away} )`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          md={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography alignSelf="center" variant="body1" fontSize={"0.9rem"}>
            {` Refferee : ${dummyMatch.referees[0].name}`}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MatchComponent;
