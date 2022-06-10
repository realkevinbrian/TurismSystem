/****
 * Shops Report Page Component
 * In this component we declare all the Shops Report page functionlities
 * we Diiplay Shops Report data in this compont
 */
import { AppContainer } from "../../../Components/Global/Reusable";
import React, { useState } from "react";
import DialogModal from "../../../Components/DialogModal";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import { UpdateRow } from "../../../features/ShopsReportSlice";
import BodyData from "./BodyData";
import Details from "./Details";
import Labels from "./Labels";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
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
        TableTitle="Estabelecimentos"
        Component={<ShowTotal />}
        Labels={<Labels />}
        TableData={<BodyData OpenDetails={OpenDetails} OpenModal={OpenModal} />}
      />
      {details && (
        <Details
          CloseDetails={CloseDetails}
          detailsID={Id}
          openPreview={setPreview}
        />
      )}
      {data && (
        <DialogModal>
          <ConfirmModal
            data={data}
            setModal={setData}
            UpdateRow={UpdateRow}
            role="Estabelecimento"
          />
        </DialogModal>
      )}

      {preview && (
        <DialogModal>
          <ImageModal openPreview={setPreview} />
        </DialogModal>
      )}
    </AppContainer>
  );
}
