import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";

import {
  LandingNavLinkData,
  LandingNavLinkButton,
  LogoData,
} from "constants/navbar";
import Link from "next/link";
import AuthAsWhoModal from "components/auth/AuthWhoModal";
import React, { useState } from "react";
import Image from "next/image";
import Spinner from "../loading/Spinner";

// import { normalText } from "../../../style/TextSize";

const LandingHeader = () => {
  console.log("asd");
  //   const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const whoIsAuthenticated = useSelector(
  //   (state: AuthInterface) => state.auth.whoIsAuthenticated
  // );
  const [authCase, setAuthCase] = useState("");

  const isAuthenticated = false;
  // const isAuthenticated = localStorage.getItem("jwt") !== null ? true : false;

  const closeModal = () => {
    setAuthCase("");
  };

  const correctLink = (text: string) => {
    setAuthCase(text);
  };

  const logOut = () => {
    // localStorage.removeItem("jwt");
    // navigate("/");
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
          {LandingNavLinkData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {!isAuthenticated && (
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
        {isAuthenticated && (
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

export default React.memo(LandingHeader);

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
      margin-right: 100px;

      & li {
        margin: 0 25px;
        font-size: ${(props) => props.theme.fontSizes.medium.pc};
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
