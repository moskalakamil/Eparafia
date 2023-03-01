import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import React from "react";
import { authAction } from "store/auth-slice";

import styled from "styled-components";
import { LogoData, ParishNavLinksData } from "../../../constants/navbar";

interface IProps {
  isAuthenticated: boolean;
}

const ParishHeader = ({ isAuthenticated }: IProps) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authAction.logOut());
  };

  return (
    <HeaderStyle>
      <Link href="/">
        <Image
          src={LogoData.source}
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div>
        <ul>
          {ParishNavLinksData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {isAuthenticated && (
          <>
            <p onClick={logOut}>zalogowano</p>
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
  left: 0;
  background-color: #636363;
  z-index: 5;

  & > a {
    position: relative;
    min-width: 200px;
    height: 80px;
  }

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
