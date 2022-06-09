/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import { Container } from "@mui/material";
import React , {useState} from "react";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Details from "./Details";
import Labels from "./Labels";
import {Modal} from "../../../Components/Global/Reusable"
import { UpdateRow } from "../../../features/UsersReportSlice";


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

  /**
   * Declare Method to Open Modal for Confirmation @param {rowStatus, rowId, rowName}
   * Declare switch functionality
   */
  function OpenModal(rowStatus, rowId, rowName) {
    setModal(true);
    setData({
      Id: rowId,
      Status: rowStatus,
      Name: rowName,
    });
    // console.log(data)
  }


  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Usuarios"
        Component={<ShowTotal />}
        Labels={<Labels />}
        TableData={<BodyData OpenModal={OpenModal} OpenDetails={OpenDetails}/>}
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} />}
      <Modal open={modal}>
        <ConfirmModal data={data} setModal={setModal} UpdateRow = {UpdateRow} role = "Usuario"/>
      </Modal>
    </Container>
  );
}

