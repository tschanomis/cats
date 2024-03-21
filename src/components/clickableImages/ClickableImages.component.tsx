import { Grid, Card, CardMedia } from "@mui/material";
import { CatsResponse } from "../../core/types/cats/cats.types";

function ClickableImages({ items }: { items: CatsResponse[] }) {
  return (
    <Grid
      className="ClickableImages"
      item
      container
      justifyContent="center"
      alignContent="center"
      spacing={5}
    >
      {items.map((item: CatsResponse) => (
        <Grid item key={`${item.id}`}>
          <Card>
            <CardMedia
              component="img"
              image={item.url}
              alt="alt"
              width="300"
              height="300"
              onClick={() => console.log(item.id)}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ClickableImages;
