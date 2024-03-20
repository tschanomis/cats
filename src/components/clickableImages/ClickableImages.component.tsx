import { Grid, Card, CardMedia } from "@mui/material";

function ClickableImages() {
  const list = ["one", "two"];
  return (
    <Grid
      className="ClickableImages"
      item
      container
      justifyContent="center"
      alignContent="center"
      spacing={5}
    >
      {list.map((item, i) => (
        <Grid item key={`${item}_${i}`}>
          <Card>
            <CardMedia
              component="img"
              image="http://25.media.tumblr.com/tumblr_m2p6dxhxul1qdvz31o1_500.jpg"
              alt="alt"
              width="300"
              height="300"
              onClick={() => console.log(i)}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ClickableImages;
