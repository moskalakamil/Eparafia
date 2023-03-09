import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import ParishMenuCard from "./ParishMenuCard";

interface itemProps {
  header: string;
  items: {};
}

const MenuCards = () => {
  const { t } = useTranslation("parish");
  return (
    <ContainerStyle>
      <ParishMenuCard
        header={t("parish-menu-header -> menage parish")}
        list={[
          t("parish-menu-listitem -> add to baptism book"),
          t("parish-menu-listitem -> edit wedding book"),
          t("parish-menu-listitem -> menage calender"),
          t("parish-menu-listitem -> add priests"),
          t("parish-menu-listitem -> change parish website settings"),
        ]}
      />
      <ParishMenuCard
        header={t("parish-menu-header -> menage liturgical service")}
        list={[
          t("parish-menu-listitem -> points count"),
          t("parish-menu-listitem -> choirboy duty"),
          t("parish-menu-listitem -> carol"),
          t("parish-menu-listitem -> menage liturgical assistance"),
        ]}
      />
    </ContainerStyle>
  );
};

export default MenuCards;

const MenuCardStyle = styled.div`
  width: 400px;
  height: 600px;
  padding: 30px;
  margin: 20px 50px;
  border: 1px black solid;
  border-radius: 20px;
  & > ul {
    margin-left: 20px;
  }
`;
const ContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
