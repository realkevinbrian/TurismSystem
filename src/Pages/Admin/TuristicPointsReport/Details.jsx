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
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Title,
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

export const Description = ({ desc }) => {
  return (
    <div>
      <Title>Descrição</Title>
      <p style={{ margin: "5px 0 0 0", color: "#949494", fontSize: ".9rem" }}>
        {desc}
      </p>
    </div>
  );
};

export const Address = ({ address }) => {
  return (
    <div>
      <h5 style={{ margin: "5px 0 0 0" }}>Endereço</h5>

      <p
        style={{
          margin: "5px 0 0 0",
          display: "grid",
          gap: "5px",
          color: "#949494",
          fontSize: ".8rem",
        }}
      >
        {address.split(",").map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </div>
  );
};

export const ImagesAlbum = ({ photos }) => {
  return (
    <div>
      <div>
        <Title style={{ margin: "5px 0 0 0" }}>Fotos</Title>
        <span style={{ color: "#949494", fontSize: ".8rem" }}>
          Clique nas imagens para expandir
        </span>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "4px",
          borderRadius: "20px",
          marginTop: "5px",
        }}
      >
        {photos.map((image, index) => (
          <img key={index} src={image} alt="previewImage" />
        ))}
      </div>
    </div>
  );
};

export const ActionButtons = ({ active, block, id }) => {
  /**
   * In this component we declare Approve and Disapprove Functionality
   * @params (__active , _block, __id)
   * */

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PrimaryButton
          style={{ backgroundColor: "#079784" }}
          onClick={() => active({ id })}
        >
          Approvar
        </PrimaryButton>
        <PrimaryButton
          style={{ backgroundColor: "#ec0202" }}
          onClick={() => block({ id })}
        >
          Reprovar
        </PrimaryButton>
      </div>
    </>
  );
};
