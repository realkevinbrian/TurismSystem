/****
 * In this component we declare all functionlities for TurismPointsReport Page
 * We retrieve data from our server
 */

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ShowTotal } from "../../../Components/Global/Reusable";
import StyledTable from "../../../Components/Table/index";
import { UpdateRow } from "../../../features/GuideReportSlice";
import TableData from "./bodyData";
import TableLabels from "./Labels";
import { Modal } from "./styled";
import Details from "./Details";


export default function index() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [details, OpenDetails] = useState(false)

  /**
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
        TableData={<TableData OpenModal={OpenModal} />}
      />

      {details && <Details/>}
      <Modal open={modal}>
        <CardModal data={data} setModal={setModal} />
      </Modal>
    </Container>
  );
}

/***
 * Confirm Modal
 */
function CardModal({ setModal, data }) {

   /**
   * Declare switch functionality
   * @params {data and SetModal}
   */
  const dispatch = useDispatch();
  function handleSwitch() {
    setModal(false);

    if (data.Status === "active") {
      dispatch(UpdateRow({ id: data.Id, status: "blocked" }));
    } else {
      dispatch(UpdateRow({ id: data.Id, status: "active" }));
    }
  }

  return (
    <Card sx={{ width: "400px" }}>
      <CardHeader subheader="Deseja Continuar ?" />
      <CardContent>
        <p>
          Confirma a {data.Status === "active" ? "reprovação" : "aprovação"} do
          ponto turistico
          <span> {data.Name}?</span>
        </p>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <strong onClick={handleSwitch}>Confirmar</strong>
        <strong onClick={() => setModal(false)}>Cancelar</strong>
      </CardActions>
    </Card>
  );
}


