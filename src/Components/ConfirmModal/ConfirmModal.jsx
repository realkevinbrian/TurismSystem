import {
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

/***
 * Confirm Modal
 */
export default function ConfirmModal({ setModal, data, role, UpdateRow }) {
  /**
   * Declare switch functionality
   * @params {data , SetModal , role , Action : UpdateRow }
   */
  console.log("Modal Data" , data);
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
          Confirma a {data.Status === "active" ? "reprovação" : "aprovação"} do { role}
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
