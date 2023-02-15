import React from "react";
import styled from "styled-components";
import { ParishNewsData } from "../../../constants/parish";
import { extraBigText } from "../../../style/TextSize";
import ButtonDetails from "../../Global/UI/ButtonDetails";
import TextDetails from "../../Global/UI/TextDetails";

const ParishNewsHeading = () => {
  return (
    <ContainerStyle>
      <TextDetails
        text={ParishNewsData.heading}
        size={extraBigText.size}
        weight={extraBigText.weight}
      />
      <ButtonDetails
        text={ParishNewsData.add}
        width={"auto"}
        padding="10px 50px"
      />
    </ContainerStyle>
  );
};

export default ParishNewsHeading;

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5% 0;
  padding: 0 10%;
`;
