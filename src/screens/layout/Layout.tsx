import { Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

function Layout() {
  return (
    <div className="Layout">
      <Grid container direction="column">
        <Grid item>
          <>Layout</>
        </Grid>

        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
