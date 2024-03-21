import { useContext, useEffect, useState } from "react";

import CatsContext from "../../core/contexts/Cats.context";

import { generateDistinctNumbers } from "../../core/helpers/generateDistinctNumbers.helpers";

import { Grid } from "@mui/material";

import ClickableImages from "../../components/clickableImages/ClickableImages.component";
import RefreshCatsButton from "../../components/refreshCatsButton/refreshCatsButton.component";

import { CatsResponse } from "../../core/types/cats/cats.types";

function Vote() {
  const { catsDetails } = useContext(CatsContext);

  const [catsList, setCatsList] = useState<CatsResponse[] | []>([]);
  const [refreshCats, setRefreshCats] = useState<boolean>(false);

  const refreshAction = () => setRefreshCats(!refreshCats);

  useEffect(() => {
    const catsIndex: number[] = generateDistinctNumbers(catsDetails.length);
    const catsList: CatsResponse[] = catsIndex.map(
      (catsIndex) => catsDetails[catsIndex]
    );
    setCatsList(catsList);
  }, [catsDetails, refreshCats]);

  return (
    <Grid className="Vote" container justifyContent="center" spacing={5}>
      <ClickableImages items={catsList} />
      <RefreshCatsButton action={refreshAction} />
    </Grid>
  );
}

export default Vote;
