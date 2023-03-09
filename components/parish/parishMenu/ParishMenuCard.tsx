import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

interface IProps {
  header: string;
  list: string[];
}

const ParishMenuCard = ({ header, list }: IProps) => {
  const { t } = useTranslation("parish");
  return (
    <MenuCardStyle>
      <TextDetails
        text={header}
        size="medium"
        weight="large"
        margin="0 0 50px 0"
        underline={true}
      />
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ButtonDetails
        text={t("parish-menu-button -> menage")}
        color="secondary"
      />
    </MenuCardStyle>
  );
};

export default ParishMenuCard;

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
