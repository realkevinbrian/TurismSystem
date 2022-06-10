/****
 * Users Report Page Component
 * In this component we declare all the Users Report page functionlities
 * we Diiplay Users Report data in this compont
 */

import React, {useState} from "react";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table";
import BodyData from "./BodyData";
import Labels from "./Labels";
import Details  from './Details'
import { UpdateRow } from "../../../features/GuideReportSlice";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import DialogModal from "../../../Components/DialogModal";
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
        TableTitle="Guias Turisticos"
        Component={<ShowTotal total="3,000.00"/>}
        Labels={<Labels />}
        TableData={<BodyData OpenDetails={OpenDetails} OpenModal={OpenModal}/>}
      />
      {details && <Details CloseDetails={CloseDetails} detailsID={Id} openPreview={setPreview}/>}
      {data && (
        <DialogModal>
          <ConfirmModal
            data={data}
            setModal={setData}
            UpdateRow={UpdateRow}
            role="guia turistico"
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
