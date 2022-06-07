/****
 * Shops Report Page Component
 * In this component we declare all the Shops Report page functionlities
 * we Diiplay Shops Report data in this compont
 */

import { Container } from "@mui/material";
import React, {useState} from "react";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Labels from "./Labels";
import { ShowTotal } from "../../../Components/Global/Reusable";
import Details from "./Details"


export default function index() {

  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [Id, setId] = useState(null);
  const [details, setDetails] = useState(false);

   /***
   * Declare a method to Open and close Details
   * We are receiving {row.id} parameters
   */

    function OpenDetails(rowId) {
      setDetails(true);
      setId(rowId);
    }
  
    function CloseDetails() {
      setDetails(false);
    }
  

  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Estabelecimentos"
        Component={<ShowTotal/>}
        Labels={<Labels />}
        TableData={<BodyData OpenDetails={OpenDetails}/>}
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} />}
    </Container>
  );
}


