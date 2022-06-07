/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import image from "../../../Assets/avatar.jpg";
import { PrimaryButton } from "../../../Components/Button";
import {
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Title,
} from "../../../Components/Global/Reusable";
import { selectAll, UpdateRow } from "../../../features/UsersReportSlice";

export default function index({ CloseDetails, detailsID }) {
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
          .filter((item) => item.id === 1)
          .map((item, index) => (
            <OverlayBody
              style={{ gap: "15px", paddingTop: "40px" }}
              key={index}
            >
              <Profile />
              <Description />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}

export const Description = ({ desc }) => {
  return (
    <div>
      <div style={{display : "flex", flexDirection : "column" , gap : "10px"}}>
        <Title>Denuncias</Title>

        <div>
          <Title>Recebidas</Title>
          <ul style={{fontSize : ".8rem"}}>
            <li>Excluidas : 0</li>
            <li>Reactivadas : 2</li>
          </ul>
        </div>

        <div>
          <Title>Efetuadas</Title>
          <ul style={{fontSize : ".8rem"}}>
            <li>Excluidas : 0</li>
            <li>Reactivadas : 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Profile = ({ photos }) => {
  return (
    <StyledProfile>
      <div style={{display : "grid", gap : "5px"}}>
        <Title style={{ margin: "5px 0 0 0" }}>Marcos Paulo</Title>
        <div style={{display : "grid", gap : "7px"}}>
          <Title>Dados Cadastrais</Title>
          <ul>
            <li>
              Telefone : <span>(47) 123456789</span>
            </li>
            <li>
              E-mail : <span>paulomachado@gmail.com</span>
            </li>
            <li>
              Pais : <span> Italia</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="profileImage"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #006875",
          }}
        />
      </div>
    </StyledProfile>
  );
};

// export const ActionButtons = ({ active, block, id }) => {
//   /**
//    * In this component we declare Approve and Disapprove Functionality
//    * @params (__active , _block, __id)
//    * */

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <PrimaryButton
//           style={{ backgroundColor: "#079784" }}
//           onClick={() => active({ id })}
//         >
//           Approvar
//         </PrimaryButton>
//         <PrimaryButton
//           style={{ backgroundColor: "#ec0202" }}
//           onClick={() => block({ id })}
//         >
//           Reprovar
//         </PrimaryButton>
//       </div>
//     </>
//   );
// };

/*****
 * Styled Components
 */

const StyledProfile = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;

  }
`;
