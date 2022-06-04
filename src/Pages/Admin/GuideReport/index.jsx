/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import { Container } from "@mui/material";
import React from "react";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Labels from "./Labels";

export default function index() {
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Guias Turisticos"
        Component={<ShowTotal total="3,000.00"/>}
        Labels={<Labels />}
        TableData={<BodyData />}
      />
    </Container>
  );
}
