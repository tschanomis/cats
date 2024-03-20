import { Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

import ApplicationBar from "../../components/applicationBar/ApplicationBar.component";

function Layout() {
  return (
    <div className="Layout">
      <Grid container direction="column">
        <Grid item>
          <ApplicationBar />
        </Grid>

        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
