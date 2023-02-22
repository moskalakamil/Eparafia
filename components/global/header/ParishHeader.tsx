import Link from "next/link";
import React from "react";

import styled from "styled-components";
import { LogoData, ParishNavLinksData } from "../../../constants/navbar";

const ParishHeader = () => {
  //   const whoIsAuthenticated = useSelector(
  //     (state: AuthInterface) => state.auth.whoIsAuthenticated
  //   );

  return (
    <HeaderStyle>
      <Link href="/">
        <img src={LogoData.source} />
      </Link>
      <div>
        <ul>
          {ParishNavLinksData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {/* {whoIsAuthenticated !== "" && (
          <>
            <p>zalogowano</p>
          </>
        )} */}
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
        font-size: ${(props) => props.theme.fontSizes.medium.pc};
        color: white;
      }
    }
  }
`;
