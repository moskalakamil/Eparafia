import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";

import styled from "styled-components";
// import { bigText, normalText } from "../../../style/TextSize";
import TextDetails from "./TextDetails";

interface IProps {
  windowWidth: number;
  minWidthTextVisible: number;
  parishName: string | string[] | undefined;
}

const BtnEditGoBack = ({
  windowWidth,
  minWidthTextVisible,
  parishName,
}: IProps) => {
  const { t } = useTranslation("parish");
  return (
    <Link href={`/parish/${parishName}`} style={{ textDecoration: "none" }}>
      <ContainerStyle minWidth={minWidthTextVisible + "px"}>
        <div style={{ position: "relative" }}>
          <Image
            src="/images/go-back.svg"
            alt="Go back to parish"
            // fill
            width="50"
            height="50"
          />
        </div>
        {windowWidth > minWidthTextVisible && (
          <TextDetails
            text={t("edit -> go back")}
            size="medium"
            weight="large"
          />
        )}
      </ContainerStyle>
    </Link>
  );
};

export default BtnEditGoBack;

const ContainerStyle = styled.div<{ minWidth: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 600px) {
    position: absolute;
    left: 20px;
    top: 30px;
  }
  @media (min-width: ${(props) => props.minWidth}) {
    position: static;
  }
  p {
    color: black;
  }
`;
