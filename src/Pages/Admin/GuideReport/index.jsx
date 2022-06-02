/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import { Container } from "@mui/material";
import React from "react";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Labels from "./Labels";
import { ShowTotalWrapper } from "./styled";

export default function index() {
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Guias Turisticos"
        Component={<ShowTotal />}
        Labels={<Labels />}
        TableData={<BodyData />}
      />
    </Container>
  );
}


function ShowTotal() {
  return (
    <>
      <ShowTotalWrapper>
        <h4>Total</h4>
        <h5>5,0000</h5>
      </ShowTotalWrapper>
    </>
  );
}
