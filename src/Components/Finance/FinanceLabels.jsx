import React from 'react';
import * as S from "./styled";

/****
 * LABELS FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */


export function FinanceLabels({ Columns }) {

  return (
    <>
      {//=>Here we looping through our received data from the props
        Columns.map((column) => {
          return (
            <S.CustomTableCell key={column.id}>
              {column.label}
            </S.CustomTableCell>
          );
        })}
    </>
  );
}
