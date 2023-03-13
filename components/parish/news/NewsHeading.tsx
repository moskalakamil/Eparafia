import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const NewsHeading = () => {
  const { t } = useTranslation("parish");
  return (
    <ContainerStyle>
      <TextDetails
        text={t("parish-news-heading -> last news")}
        size="xlarge"
        weight="xlarge"
      />
      <ButtonDetails
        text={t("parish-news -> add news")}
        color="white"
        width={"auto"}
        padding="10px 50px"
      />
    </ContainerStyle>
  );
};

export default NewsHeading;

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5% 0;
  padding: 0 10%;
`;
