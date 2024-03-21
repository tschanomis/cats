import { useContext, useEffect, useState, MouseEvent } from "react";
import CatsContext from "../../core/contexts/Cats.context";
import { Grid } from "@mui/material";

import ClickableImages from "../../components/clickableImages/ClickableImages.component";
import RefreshCatsButton from "../../components/refreshCatsButton/refreshCatsButton.component";
import { CatsResponse } from "../../core/types/cats/cats.types";

function Vote() {
  const { catsDetails } = useContext(CatsContext);

  const [catsList, setCatsList] = useState<CatsResponse[] | []>([]);
  const [refreshCats, setRefreshCats] = useState<boolean>(false);

  const generateDistinctNumbers = (maxLength: number): number[] => {
    if (maxLength <= 2) return [];
    const generateNumber = () => Math.floor(Math.random() * maxLength);
    const num1 = generateNumber();
    let num2 = generateNumber();
    while (num2 === num1) num2 = generateNumber();
    return [num1, num2];
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const refreshAction = (_event: MouseEvent<HTMLButtonElement>) =>
    setRefreshCats(!refreshCats);

  useEffect(() => {
    const catsIndex = generateDistinctNumbers(catsDetails.length);
    const catsList: CatsResponse[] = catsIndex.map(
      (catsIndex) => catsDetails[catsIndex]
    );
    setCatsList(catsList);
  }, [catsDetails, refreshCats]);

  return (
    <Grid
      className="Vote"
      container
      justifyContent="center"
      alignContent="space-evenly"
      height="100%"
    >
      <ClickableImages items={catsList} />
      <RefreshCatsButton action={refreshAction} />
    </Grid>
  );
}

export default Vote;
