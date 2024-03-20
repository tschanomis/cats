import { Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

import ApplicationBar from "../../components/applicationBar/ApplicationBar.component";

function Layout() {
  return (
    <Grid className="Layout" container direction="column" height="100%">
      <Grid item>
        <ApplicationBar />
      </Grid>

      <Grid item flexGrow={1}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Layout;
