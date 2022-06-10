/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import place1 from "../../../Assets/Images/place01.webp";
import place2 from "../../../Assets/Images/place02.webp";
import place3 from "../../../Assets/Images/place03.webp";
import place4 from "../../../Assets/Images/place04.webp";
import {
  Address,
  ImagesAlbum,
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Title,
  Description,
  ActionButtons
} from "../../../Components/Global/Reusable";
import {
  selectAll,
  UpdateRow,
} from "../../../features/TuristicPointsReportSlice";

export default function index({ CloseDetails, detailsID,openPreview }) {
  const reportData = useSelector(selectAll);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const images = [place1, place2, place3, place4, place3, place1];

  //Method to Approve
  function Active({ id }) {
    dispatch(UpdateRow({ id: id, status: "active" }));
    setMessage("Aprovado");
  }

  //Method to Blocked
  function Block({ id }) {
    dispatch(UpdateRow({ id: id, status: "blocked" }));
    setMessage("Reprovado");
  }

  return (
    <OverlayContainer>
      <OverlayChild>
        <OverlayHeader>
          <ArrowBack onClick={() => CloseDetails()} />
          <Title>Detalhes</Title>
        </OverlayHeader>

        {reportData
          .filter((item) => item.id === detailsID)
          .map((item, index) => (
            <OverlayBody
              style={{ gap: "15px", paddingTop: "40px" }}
              key={index}
            >
              <Title>{item.name}</Title>
              <Description desc={item.description} />
              <Address address={item.address} />
              <ImagesAlbum photos={images}  openPreview={openPreview}/>
              {message && <Alert severity="success">{message}</Alert>}
              <ActionButtons id={item.id} active={Active} block={Block} />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}



