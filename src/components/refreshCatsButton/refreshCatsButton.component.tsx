import { Grid, Button } from "@mui/material";

function RefreshCatsButton() {
  return (
    <Grid className="RefreshCatsButton">
      <Button variant="contained" onClick={() => console.log("refresh cats")}>
        Refresh cats
      </Button>
    </Grid>
  );
}

export default RefreshCatsButton;
