import { useContext } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { Grid, Card, CardMedia } from "@mui/material";

import { CatsResponse } from "../../core/types/cats/cats.types";

function ClickableImages({ items }: { items: CatsResponse[] }) {
  const { catsDetails, setCatsDetails } = useContext(CatsContext);

  const voteCat = (id: string): void => {
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
              alt={item.url}
              sx={{
                height: { xs: "250px", md: "500px" },
                objectFit: "cover",
                aspectRatio: "1 / 1",
              }}
              onClick={() => voteCat(item.id)}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ClickableImages;
