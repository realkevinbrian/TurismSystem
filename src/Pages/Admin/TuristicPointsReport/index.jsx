/****
 * In this component we declare all functionlities for TurismPointsReport Page
 * We retrieve data from our server
 */

import { Container } from "@mui/material";
import React, { useState } from "react";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import DialogModal from "../../../Components/DialogModal";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table/index";
import { UpdateRow } from "../../../features/TuristicPointsReportSlice";
import TableData from "./bodyData";
import Details from "./Details";
import TableLabels from "./Labels";
import { AppContainer } from "../../../Components/Global/Reusable";
import ImageModal from "../../../Components/DialogModal/ImageModal"

export default function index() {
  const [data, setData] = useState(null);
  const [Id, setId] = useState(null);
  const [details, setDetails] = useState(false);
  const [preview, setPreview] = useState(false);

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
    setData({
      Id: rowId,
      Status: rowStatus,
      Name: rowName,
    });
  }

  return (
    <AppContainer maxWidth="xl">
      <StyledTable
        TableTitle="Pontos Turisticos"
        Component={<ShowTotal total={"5,000"} />}
        Labels={<TableLabels />}
        TableData={
          <TableData OpenModal={OpenModal} OpenDetails={OpenDetails} />
        }
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} openPreview={setPreview}/>}

      {data && (
        <DialogModal>
          <ConfirmModal
            data={data}
            setModal={setData}
            UpdateRow={UpdateRow}
            role="Ponto turisticos"
          />
        </DialogModal>
      )}

      {preview && (
        <DialogModal>
          <ImageModal openPreview={setPreview}/>
        </DialogModal>
      )}
    </AppContainer>
  );
}
