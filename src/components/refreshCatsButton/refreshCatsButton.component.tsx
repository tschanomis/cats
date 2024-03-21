import { MouseEvent } from "react";

import { Grid, Button } from "@mui/material";

interface RefreshCatsButtonProps {
  action: (event: MouseEvent<HTMLButtonElement>) => void;
}

function RefreshCatsButton({ action }: RefreshCatsButtonProps) {
  return (
    <Grid item className="RefreshCatsButton">
      <Button variant="contained" onClick={(event) => action(event)}>
        Refresh cats
      </Button>
    </Grid>
  );
}

export default RefreshCatsButton;
