/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../Assets/bgImage.png";
import { PrimaryButton } from "../../../Components/Button";
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

export default function index({ CloseDetails, detailsID }) {
  const reportData = useSelector(selectAll);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const images = [image, image, image, image, image, image];

  //Method to Approve
  function Active({ id }) {
    dispatch(UpdateRow({ id: id, status: "active" }));
    setMessage("Approvado com Successo");
  }

  //Method to Blocked
  function Block({ id }) {
    dispatch(UpdateRow({ id: id, status: "blocked" }));
    setMessage("Reapprovado com successo");
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
              <ImagesAlbum photos={images} />
              {message && <Alert severity="success">{message}</Alert>}
              <ActionButtons id={item.id} active={Active} block={Block} />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}



