import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OverlayContainer,OverlayChild, OverlayHeader, OverlayBody } from "../../../../Components/Global/Reusable";
import { setCategoryState } from "../../../../features/MenuSlice";
import Form from "../Forms/TrendsForm"

/**
 * Category Register component
 * Here we define Register Category funcionality
 *
 */
export default function index() {
  const CategoryState = useSelector((state) => state.menu.CategoryState);
  const dispatch = useDispatch();

  return (
    <>
      {CategoryState && (
        <OverlayContainer>
          <OverlayChild>
            <OverlayHeader>
              <ArrowBack onClick={() => dispatch(setCategoryState())} />
              <h3>Cadastro de Destaques</h3>
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
