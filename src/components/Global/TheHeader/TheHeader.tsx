import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Cards/Modals";
import AuthAsWhoModal from "../../AuthPages/AuthAsWhoModal";

import {
  LandingNavLinkData,
  LandingNavLinkButton,
  LogoData,
} from "../../../constants/navbar";

import { normalText } from "../../../style/TextSize";
import AuthInterface from "../../../models/authModel";
import { authAction } from "../../../store/AuthSlice";

const TheHeader = () => {
  const dispatch = useDispatch();

  const whoIsAuthenticated = useSelector(
    (state: AuthInterface) => state.auth.whoIsAuthenticated
  );

  const [authCase, setAuthCase] = useState("");

  const closeModal = () => {
    setAuthCase("");
  };

  const correctLink = (text: string) => {
    setAuthCase(text);
  };

  const logOut = () => {
    dispatch(authAction.logOut());
  };

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={LogoData.source} />
      </Link>
      <div>
        <ul>
          {LandingNavLinkData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {whoIsAuthenticated === "" && (
          <>
            {LandingNavLinkButton.map((data) => (
              <ButtonStyle
                onClick={() => correctLink(data.text)}
                key={data.id}
                color={data.color}
              >
                {data.text}
              </ButtonStyle>
            ))}
          </>
        )}
        {whoIsAuthenticated !== "" && (
          <>
            <p onClick={logOut}>zalogowano</p>
          </>
        )}
        {authCase !== "" && (
          <AuthAsWhoModal authCase={authCase} onCloseModal={closeModal} />
        )}
      </div>
    </HeaderStyle>
  );
};

export default TheHeader;

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 140px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  background-color: rgba(53, 53, 53, 0.3);
  z-index: 5;

  & > div {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;

      & li {
        margin: 0 25px;
        font-size: ${normalText.size};
        color: white;
      }
    }
  }
`;
const ButtonStyle = styled.button`
  padding: 15px;
  margin: 0 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.color};
`;
// font-size: 25px;
// color: white;
// font-weight: 600;
// background-color: ${(props) => props.color} ;
// `
// export const LabelStyle = styled.label`
// margin: 0;
// font-size: 25px;
// `
