import { Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

import { CatsProvider } from "../../core/contexts/Cats.context";

import ApplicationBar from "../../components/applicationBar/ApplicationBar.component";

function Layout() {
  return (
    <Grid className="Layout" container direction="column" height="100%">
      <Grid item>
        <ApplicationBar />
      </Grid>

      <Grid item flexGrow={1}>
        <CatsProvider>
          <Outlet />
        </CatsProvider>
      </Grid>
    </Grid>
  );
}

export default Layout;
