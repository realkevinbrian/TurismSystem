import {
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";

/***
 * Confirm Modal
 */
export default function ConfirmModal({ setModal, data, role, UpdateRow }) {
  /**
   * Declare switch functionality
   * @params {data , SetModal , role , Action : UpdateRow }
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
    <DialogContent className="CardWidth-250 normalize">
      <Grid container>
        <Grid item>
          <h3>Deseja Continuar ?</h3>
        </Grid>
        <Grid item className="paddingBottom-30">
          Confirma a {data.Status === "active" ? "reprovação" : "aprovação"} do{" "}
          {role}
          <strong> {data.Name}?</strong>
        </Grid>
        <Grid item container className = "UpperCase alignLeft">
          <Grid item lg={6}>
            <strong className="Pointer" onClick={handleSwitch}>
              Confirmar
            </strong>
          </Grid>

          <Grid item lg={6}>
            <strong className="Pointer" onClick={() => setModal(false)}>
              Cancelar
            </strong>
          </Grid>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
