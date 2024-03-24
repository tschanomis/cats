import { Grid, Typography } from "@mui/material";

function ErrorPage({ status }: { status?: 500 }) {
  const message: string =
    status === 500 ? "please try again later." : "Page not found.";
  return (
    <Grid
      className="ErrorPage"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography textAlign="center" variant="h2">
          Oops! Something Went Wrong !
        </Typography>
      </Grid>
      <Grid item>
        <Typography textAlign="center" variant="h3">
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ErrorPage;
