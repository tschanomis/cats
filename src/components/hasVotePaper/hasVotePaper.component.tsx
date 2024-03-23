import { Link } from "react-router-dom";

import { Grid, Typography, Avatar, Button } from "@mui/material";

import { findMostVotedCat } from "../../core/helpers/findMostVotedCat.helpers";

import { CatsResponse } from "../../core/types/cats/cats.types";

function HasVotesPaper({ catsDetails }: { catsDetails: CatsResponse[] }) {
  const mostVotedCat: CatsResponse = findMostVotedCat(catsDetails);
  return (
    <Grid
      className="HasVotesPaper"
      container
      direction="column"
      alignItems="center"
      spacing={5}
      p={5}
    >
      <Grid item>
        <Typography variant="h3" textAlign="center">
          congratulations to this little kitten for the first place !
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          alt={mostVotedCat.url}
          src={mostVotedCat.url}
          sx={{ width: 300, height: 300 }}
        />
      </Grid>
      <Grid item>
        <Button component={Link} to="/ranking" variant="contained">
          see the full ranking
        </Button>
      </Grid>
    </Grid>
  );
}

export default HasVotesPaper;
