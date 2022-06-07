/****
 * In this component we declare all functionlities for TurismPointsReport Page
 * We retrieve data from our server
 */

import { Container } from "@mui/material";
import React, { useState } from "react";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table/index";
import TableData from "./bodyData";
import Details from "./Details";
import TableLabels from "./Labels";
import {Modal} from "../../../Components/Global/Reusable"
import { UpdateRow } from "../../../features/TuristicPointsReportSlice";


export default function index() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [Id, setId] = useState(null);
  const [details, setDetails] = useState(true);

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
   * Declare Method to Open Modal for Confirmation
   * Declare switch functionality
   */
  function OpenModal(rowStatus, rowId, rowName) {
    setModal(true);
    setData({
      Id: rowId,
      Status: rowStatus,
      Name: rowName,
    });
  }

  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Pontos Turisticos"
        Component={<ShowTotal total={"5,000"} />}
        Labels={<TableLabels />}
        TableData={
          <TableData OpenModal={OpenModal} OpenDetails={OpenDetails} />
        }
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} />}
      <Modal open={modal}>
        <ConfirmModal data={data} setModal={setModal} UpdateRow = {UpdateRow} role = "Ponto turistico"/>
      </Modal>
    </Container>
  );
}
