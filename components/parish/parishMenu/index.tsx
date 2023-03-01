import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import React from "react";
import styled from "styled-components";
import { menuParish } from "../../../constants/parish";

const MenuCards = () => {
  return (
    <ContainerStyle>
      {menuParish.map((data) => (
        <MenuCardStyle key={data.id}>
          <TextDetails
            text={data.name}
            size="medium"
            weight="large"
            margin="0 0 50px 0"
            underline={true}
          />
          <ul>
            {data.menuList.map((dataList) => (
              <li key={dataList.id}>{dataList.text}</li>
            ))}
          </ul>
          <ButtonDetails text={data.button} color="secondary" />
        </MenuCardStyle>
      ))}
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
