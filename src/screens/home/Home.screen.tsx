import { useContext } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { Grid, Paper } from "@mui/material";

import NoVotesPaper from "../../components/noVotesPaper/noVotesPaper.component";
import HasVotesPaper from "../../components/hasVotePaper/hasVotePaper.component";

function Home() {
  const { catsDetails } = useContext(CatsContext);
  const hasVote: boolean = catsDetails.some((cat) => cat.vote);
  return (
    <Grid className="Home" container justifyContent="center">
      <Grid item>
        <Paper elevation={6}>
          {!hasVote && <NoVotesPaper catsDetails={catsDetails} />}
          {hasVote && <HasVotesPaper catsDetails={catsDetails} />}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
