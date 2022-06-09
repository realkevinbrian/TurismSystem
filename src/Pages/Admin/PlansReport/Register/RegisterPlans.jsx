import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OverlayContainer,
  OverlayChild,
  OverlayHeader,
  OverlayBody,
} from "../../../../Components/Global/Reusable";
import { setPlanRegisterState } from "../../../../features/MenuSlice";
import Form from "../Forms/PlansForm";

/**
 * Category Register component
 * Here we define Register Category funcionality
 *
 */
export default function index() {
  const PlansForm = useSelector((state) => state.menu.PlansRegisterState);
  const dispatch = useDispatch();

  return (
    <>
      {PlansForm && (
        <OverlayContainer>
          <OverlayChild>
            <OverlayHeader>
              <ArrowBack onClick={() => dispatch(setPlanRegisterState())} />
              <h3>Cadastro de Planos</h3>
            </OverlayHeader>

            <OverlayBody>
              <Form />
            </OverlayBody>
          </OverlayChild>
        </OverlayContainer>
      )}
    </>
  );
}
