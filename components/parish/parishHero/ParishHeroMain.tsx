import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ParishHeroMain = () => {
  return (
    <ContainerStyle>
      <TextDetails
        text={"Parafia jakas tam"}
        size="xlarge"
        weight="xlarge"
        underline={true}
      />
      <TextDetails
        text={"I niedziela wielkiego postu"}
        size="medium"
        color="primary"
        margin="5% 0"
      />
      <ChasubleContainerStyle>
        <TextDetails
          text={"kolor ornaty: czerwony "}
          size="medium"
          margin="5% 0"
        />
        <Image
          src="/images/Parish/priest.svg"
          alt="priest icon"
          width={50}
          height={50}
        />
      </ChasubleContainerStyle>
      <ButtonDetails
        text="Dodaj ogłoszenia parafialne"
        color="secondary"
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
  align-items: center;

  p {
    margin-right: 3%;
  }
`;
