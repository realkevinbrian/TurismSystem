/****
 * Finance Page Component
 * In this component we declare all the finance page functionlities
 * we Diiplay finance data in this compont
 */

import { Container } from "@mui/material";
import React from "react";
import StyledTable from "../Table";
import { FinanceBodyData } from "./FinanceBodyData";
import { FinanceLabels } from "./FinanceLabels";
import {ShowTotalWrapper} from "./styled"

function FinanceMain() {
  return (
    <Container maxWidth = "xl">
      <StyledTable
        TableTitle="Financeiro"
        Component={<ShowTotal />}
        Labels={<FinanceLabels />}
        TableData={<FinanceBodyData />}
      />
    </Container>
  );
}

export default FinanceMain;

function ShowTotal() {
  return (
    <>
      <ShowTotalWrapper>
        <h4>Total</h4>
        <h5>R$12,500000</h5>
      </ShowTotalWrapper>
    </>
  );
}
