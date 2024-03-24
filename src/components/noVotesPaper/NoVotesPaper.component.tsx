import { Link } from "react-router-dom";

import {
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button,
} from "@mui/material";

import { CatsResponse } from "../../core/types/cats/cats.types";

function NoVotesPaper({ catsDetails }: { catsDetails: CatsResponse[] }) {
  return (
    <Grid
      className="NoVotesPaper"
      container
      direction="column"
      alignItems="center"
      p={4}
    >
      <Grid item>
        <Typography variant="h3" textAlign="center">
          No votes for now !
        </Typography>
      </Grid>
      <Grid item>
        <ImageList
          sx={{ width: { xs: 300, md: 500 }, height: { xs: 350, md: 500 } }}
          variant="quilted"
          cols={4}
          rowHeight={120}
        >
          {catsDetails.map((item) => (
            <ImageListItem key={item.url}>
              <img src={item.url} alt={item.url} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item>
        <Button
          sx={{ textAlign: "center" }}
          component={Link}
          to="/vote"
          variant="contained"
        >
          vote for these adorable kittens
        </Button>
      </Grid>
    </Grid>
  );
}

export default NoVotesPaper;
