import { useContext } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { Grid, Card, CardMedia } from "@mui/material";

import { CatsResponse } from "../../core/types/cats/cats.types";

function ClickableImages({ items }: { items: CatsResponse[] }) {
  const { catsDetails, setCatsDetails } = useContext(CatsContext);

  const voteCat = (id: string) => {
    const updateCatsDetails = catsDetails.map((cat) =>
      cat.id === id ? { ...cat, vote: (cat.vote ?? 0) + 1 } : cat
    );
    setCatsDetails(updateCatsDetails);
  };

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
              onClick={() => voteCat(item.id)}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ClickableImages;
