import { Grid } from "@mui/material";

import RankingList from "../../components/rankingList/RankingList.component";

function Ranking() {
  return (
    <Grid className="Ranking" container justifyContent="center" xs={12}>
      <RankingList />
    </Grid>
  );
}

export default Ranking;
