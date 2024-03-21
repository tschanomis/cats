import { useContext } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { Grid } from "@mui/material";

function RankingList() {
  const { catsDetails } = useContext(CatsContext);

  return (
    <Grid container direction="column" height="100%">
      {catsDetails.map((e) => (
        <Grid item>{e.id}</Grid>
      ))}
    </Grid>
  );
}

export default RankingList;
