import { TableCell } from '@mui/material';
import React from 'react';
import * as M from "@mui/icons-material"
import * as S from "./styled"
import { ThemeProvider } from '@mui/material';

/****
 * LABELS FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */

// const useStyles = makeStyles(({
//   tableCell: {
//     backgroundColor : "#ff0000"
//   }
// }))

export function FinanceLabels({ Columns }) {

  return (
    <>
      {//=>Here we looping through our received data from the props
        Columns.map((column) => {
          return (
            <S.CustomTableCell key={column.id}>
              {column.label}
              <M.ArrowUpwardTwoTone/>
              <M.ArrowDownwardTwoTone/>
            </S.CustomTableCell>
          );
        })}
    </>
  );
}
