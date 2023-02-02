import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoData, ParishNavLinksData } from "../../../constants/navbar";
import AuthInterface from "../../../models/authModel";
import { normalText } from "../../../style/TextSize";

const ParishHeader = () => {
  const whoIsAuthenticated = useSelector(
    (state: AuthInterface) => state.auth.whoIsAuthenticated
  );

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={LogoData.source} />
      </Link>
      <div>
        <ul>
          {ParishNavLinksData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {whoIsAuthenticated !== "" && (
          <>
            <p>zalogowano</p>
          </>
        )}
      </div>
    </HeaderStyle>
  );
};

export default ParishHeader;

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 140px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: #636363;
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
