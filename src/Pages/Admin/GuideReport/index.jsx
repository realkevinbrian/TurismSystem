/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import { Container } from "@mui/material";
import React, {useState} from "react";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Labels from "./Labels";
import Details  from './Details'


export default function index() {
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
        TableTitle="Guias Turisticos"
        Component={<ShowTotal total="3,000.00"/>}
        Labels={<Labels />}
        TableData={<BodyData OpenDetails={OpenDetails}/>}
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} />}
    </Container>
  );
}
