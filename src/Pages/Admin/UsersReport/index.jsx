/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import React, { useState } from "react";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import DialogModal from "../../../Components/DialogModal";
import { AppContainer, ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import { UpdateRow } from "../../../features/UsersReportSlice";
import TableData from "./BodyData";
import Details from "./Details";
import Labels from "./Labels";

export default function index() {
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
        TableTitle="Usuarios"
        Component={<ShowTotal />}
        Labels={<Labels />}
        TableData={
          <TableData OpenModal={OpenModal} OpenDetails={OpenDetails} />
        }
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} />}
      {data && (
        <DialogModal>
          <ConfirmModal
            data={data}
            setModal={setData}
            UpdateRow={UpdateRow}
            role="Usuario"
          />
        </DialogModal>
      )}
    </AppContainer>
  );
}
