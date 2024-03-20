import { Grid } from "@mui/material";

import ClickableImages from "../../components/clickableImages/ClickableImages.component";
import RefreshCatsButton from "../../components/refreshCatsButton/refreshCatsButton.component";

function Vote() {
  return (
    <Grid
      className="Vote"
      container
      justifyContent="center"
      alignContent="space-evenly"
      height="100%"
    >
      <ClickableImages />
      <RefreshCatsButton />
    </Grid>
  );
}

export default Vote;
