import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  LandingNavLinkData,
  LandingNavLinkButton,
  LogoData,
} from "constants/navbar";
import Link from "next/link";
import AuthAsWhoModal from "components/auth/AuthWhoModal";
import React, { useState } from "react";
import Image from "next/image";
import { fetchUserData } from "store/auth-slice";
import { useAppDispatch } from "store/store";
import { useTranslation } from "next-i18next";

interface IProps {
  isAuthenticated: boolean;
}

const LandingHeader = ({ isAuthenticated }: IProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation("common");
  const [authAction, setAuthAction] = useState("");

  const closeModal = () => {
    setAuthAction("");
  };
  const logOutHandler = () => {
    dispatch(fetchUserData(null));
  };

  return (
    <HeaderStyle>
      <Link href="/">
        <Image
          src="/images/global/logo.png"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div>
        <ul>
          <li>{t("nav-landing -> I am priest")}</li>
          <li>{t("nav-landing -> I am priest")}</li>
          <li>{t("nav-landing -> I am priest")}</li>
        </ul>
        {!isAuthenticated ? (
          <>
            <ButtonStyle
              onClick={() => setAuthAction("login")}
              color="transparent"
            >
              {t("nav-landing -> signin")}
            </ButtonStyle>
            <ButtonStyle
              onClick={() => setAuthAction("register")}
              color="#282828e5"
            >
              {t("nav-landing -> signup")}
            </ButtonStyle>
          </>
        ) : (
          <p onClick={logOutHandler}>zalogowano</p>
        )}
        {authAction !== "" && (
          <AuthAsWhoModal authAction={authAction} closeModal={closeModal} />
        )}
      </div>
    </HeaderStyle>
  );
};

export default LandingHeader;

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
  z-index: 15;

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
