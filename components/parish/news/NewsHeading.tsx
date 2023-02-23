import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import React from "react";
import styled from "styled-components";
import { ParishNewsData } from "../../../constants/parish";

const NewsHeading = () => {
  return (
    <ContainerStyle>
      <TextDetails
        text={ParishNewsData.heading}
        size="xlarge"
        weight="xlarge"
      />
      <ButtonDetails
        text={ParishNewsData.add}
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
