/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import image from "../../../Assets/Images/avatar2.webp";
import aventure2 from  "../../../Assets/Images/aventure03.webp"
import aventure4 from  "../../../Assets/Images/place05.webp"
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

export default function index({ CloseDetails, detailsID,openPreview }) {
  /***
   * In this component we display details
   */
  const images = [aventure2, aventure4, aventure4];
  const reportData = useSelector(selectAll);

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
              style={{ gap: "15px", paddingTop: "15px" }}
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
              <ImagesAlbum photos={images} openPreview={openPreview}/>
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
        <Title style={{ margin: "5px 0 0 0", fontSize : "1.3rem"}}>{name}</Title>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="profileImage"
          style={{
            objectFit : "cover",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "2px solid #006875",
          }}
        />
      </div>
    </StyledProfile>
  );
};
