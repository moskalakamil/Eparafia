import AuthBackground from "components/global/UI/Background";
import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const Parish = () => {
  const { t } = useTranslation("parish");
  return (
    <AuthBackground>
      <ContainerStyle>
        <div>
          <TextDetails
            text={t("join-parish-header -> welcome in eparafia")}
            size="large"
            weight="large"
            underline={true}
          />
          <TextDetails text={t("join-parish-description")} size="medium" />
        </div>
        <div>
          <Link href="/parish/create-parish">
            <ButtonDetails
              text={t("join-parish-button -> create parish")}
              color="secondary"
            ></ButtonDetails>
          </Link>
        </div>
      </ContainerStyle>
    </AuthBackground>
  );
};

export default Parish;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    margin: 30px 30px 100px 30px;
  }
  button {
    border: 1px solid black;
    border-radius: 10px;
    padding: 25px;
    margin: 10px;
    font-size: 40px;
    width: 100%;
    cursor: pointer;
  }
`;
