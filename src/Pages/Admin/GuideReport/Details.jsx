/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../Assets/avatar.jpg";
import {
  Description,
  ImagesAlbum,
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Plan,
  StyledProfile,
  Title,
  ContactInfo,
  SpokenLang
} from "../../../Components/Global/Reusable";
import { selectAll } from "../../../features/GuideReportSlice";

export default function index({ CloseDetails, detailsID }) {
  /***
   * In this component we display details
   */
  const images = [image, image, image, image, image, image];
  const reportData = useSelector(selectAll);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  // //Method to Approve
  // function Active({ id }) {
  //   dispatch(UpdateRow({ id: id, status: "active" }));
  //   setMessage("Approvado com Successo");
  // }

  // //Method to Blocked
  // function Block({ id }) {
  //   dispatch(UpdateRow({ id: id, status: "blocked" }));
  //   setMessage("Reapprovado com successo");
  // }

  return (
    <OverlayContainer>
      <OverlayChild style={{ width: "400px" }}>
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
              <Profile name={item.name} />
              <Description desc={item.description} />
              <ContactInfo contact={item.contacts} />

              <Grid container spacing={5}>
                <Grid item xl={6}>
                  <Plan plans={item.plans} />
                </Grid>

                <Grid item xl={6}>
                  <SpokenLang languages={item.languages} />
                </Grid>
              </Grid>
              <ImagesAlbum photos={images} />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}
export const Profile = ({ photos, name }) => {
  return (
    <StyledProfile>
      <div style={{ display: "grid", gap: "5px", alignContent: "center" }}>
        <Title style={{ margin: "5px 0 0 0" }}>{name}</Title>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="profileImage"
          style={{
            width: "70px",
            borderRadius: "50%",
            border: "2px solid #006875",
          }}
        />
      </div>
    </StyledProfile>
  );
};
