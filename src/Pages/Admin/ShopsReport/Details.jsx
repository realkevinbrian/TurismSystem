/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../Assets/Images/place05.webp";
import food from "../../../Assets/Images/food01.webp"


import {
  Address,
  Description,
  ImagesAlbum,
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Plan,
  StyledProfile,
  Title
} from "../../../Components/Global/Reusable";
import { selectAll } from "../../../features/ShopsReportSlice";
import { StyledDisplayCat } from "./styled";
import { selectAll as selectCategory } from "../../../features/CategorySlice";

export default function index({ CloseDetails, detailsID }) {
  /***
   * In this component we display details
   */
  const images = [food, food, food, food, food, food];
  const reportData = useSelector(selectAll);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

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
              <Profile name={item.name} catId={item.cat_id} />
              <Description desc={item.description} />
              <Address address={item.address} />
              <Plan plans={item.plans} />
              <ImagesAlbum photos={images} />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}

export const Profile = ({ name, catId }) => {
  const category = useSelector(selectCategory).filter(
    (item) => item.id === catId
  );

  return (
    <StyledProfile>
      <div style={{ display: "grid", gap: "5px", alignContent: "center" }}>
        <Title style={{ margin: "5px 0 0 0" }}>{name}</Title>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledDisplayCat key={index}>
          {category.map((item, index) => (
            <div
              style={{ borderColor: `${item.color}`, color: `${item.color}` }}
              key={index}
            >
              <span style={{ backgroundColor: `${item.color}` }}></span>
              <small>{item.name}</small>
            </div>
          ))}
        </StyledDisplayCat>
      </div>
    </StyledProfile>
  );
};
