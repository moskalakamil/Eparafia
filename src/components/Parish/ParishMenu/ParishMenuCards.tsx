import React from "react";
import styled from "styled-components";
import { menuParish } from "../../../constants/parish";
import { secondary } from "../../../style/Colors";
import { normalText, bigText } from "../../../style/TextSize";
import ButtonDetails from "../../Global/UI/ButtonDetails";
import TextDetails from "../../Global/UI/TextDetails";

const ParishMenuCards = () => {
  return (
    <ContainerStyle>
      {menuParish.map((data) => (
        <MenuCardStyle key={data.id}>
          <TextDetails
            text={data.name}
            size={normalText.size}
            weight={bigText.weight}
            margin="0 0 50px 0"
            underline={true}
          />
          <ul>
            {data.menuList.map((dataList) => (
              <li key={dataList.id}>{dataList.text}</li>
            ))}
          </ul>
          <ButtonDetails text={data.button} color={secondary} />
        </MenuCardStyle>
      ))}
    </ContainerStyle>
  );
};

export default ParishMenuCards;

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
