import { useContext } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { sortedVotedCats } from "../../core/helpers/sortedVotedCats/sortedVotedCats.helper";

import { Avatar, Grid, Paper } from "@mui/material";

import { CatsResponse } from "../../core/types/cats/cats.types";

function RankingList() {
  const { catsDetails } = useContext(CatsContext);

  const catsDetailsSorted: CatsResponse[] = sortedVotedCats(catsDetails);

  const voteColors: string[] = ["#ffd700", "#D3D3D3", "#CD7F32"];

  return (
    <Grid
      className="RankingList"
      item
      container
      direction="column"
      spacing={5}
      py={5}
      xs={8}
    >
      {catsDetailsSorted.map((cat, i) => (
        <Grid item key={`${cat.id}_${i}`}>
          <Paper elevation={6}>
            <Grid
              container
              justifyContent={{ xs: "center", md: "space-between" }}
              alignItems="center"
              p={5}
              spacing={2}
            >
              <Grid item>
                <Avatar
                  sx={{
                    bgcolor: `${cat.vote && (voteColors[i] ?? "#42a5f5")}`,
                  }}
                >
                  {i + 1}
                </Avatar>
              </Grid>
              <Grid item>number of votes : {cat.vote ?? "--"}</Grid>
              <Grid item>
                <Avatar
                  alt={`${cat.id}_${i}`}
                  src={cat.url}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default RankingList;
