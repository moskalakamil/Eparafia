import React from "react";
import styled from "styled-components";
import TextDetails from "../../Global/UI/TextDetails";
import { normalText, extraBigText } from "../../../style/TextSize";
import ButtonDetails from "../../Global/UI/ButtonDetails";
import { primary, secondary } from "../../../style/Colors";

const ParishHeroMain = () => {
  return (
    <ContainerStyle>
      <TextDetails
        text={"Parafia jakas tam"}
        size={extraBigText.size}
        weight={extraBigText.weight}
        underline={true}
      />
      <TextDetails
        text={"I niedziela wielkiego postu"}
        size={normalText.size}
        color={primary}
        margin="5% 0"
      />
      <ChasubleContainerStyle>
        <TextDetails
          text={"kolor ornaty: czerwony "}
          size={normalText.size}
          margin="5% 0"
        />
        <img src="/images/Parish/priest.svg" />
      </ChasubleContainerStyle>
      <ButtonDetails
        text="Dodaj ogłoszenia parafialne"
        color={secondary}
        padding={"7% 15%"}
      />
      <ButtonDetails
        text="Odczytaj wiadomości od parafian"
        padding={"7% 15%"}
      />
    </ContainerStyle>
  );
};

export default ParishHeroMain;

const ContainerStyle = styled.div`
  width: 50%;
  padding: 5%;
`;
const ChasubleContainerStyle = styled.div`
  display: flex;
`;
