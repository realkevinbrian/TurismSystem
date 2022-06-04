/****
 * Finance Page Component
 * In this component we declare all the finance page functionlities
 * we Diiplay finance data in this compont
 */
import { Container } from "@mui/material";
import React from "react";
import StyledTable from "../../../Components/Table";
import TableBody from "./FinanceBodyData";
import TableLabels from "./FinanceLabels";
import { ShowTotal } from "../../../Components/Global/Reusable";

export default function index() {
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Financeiro"
        Component={<ShowTotal/>}
        Labels={<TableLabels/>}
        TableData={<TableBody/>}
      />
    </Container>
  );
}


