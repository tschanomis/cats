import { Grid, Card, CardMedia, Button } from "@mui/material";

function Vote() {
  return (
    <Grid
      className="vote"
      container
      justifyContent="center"
      alignContent="space-evenly"
      height="100%"
    >
      <Grid
        item
        container
        justifyContent="center"
        alignContent="center"
        spacing={5}
      >
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              image="http://25.media.tumblr.com/tumblr_m2p6dxhxul1qdvz31o1_500.jpg"
              alt="alt"
              width="300"
              height="300"
            />
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardMedia
              component="img"
              image="http://25.media.tumblr.com/Jjkybd3nS98hfqy8vevnj6R9_500.jpg"
              alt="alt"
              width="300"
              height="300"
            />
          </Card>
        </Grid>
      </Grid>

      <Grid>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
}

export default Vote;
