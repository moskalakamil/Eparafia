import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

import styled from "styled-components";

import ParishNewsHeading from "./NewsHeading";
import NewsCard from "./NewsCard";

const News = () => {
  const { t } = useTranslation("parish");
  
  return (
    <>
      <ParishNewsHeading />
      <ContainerStyle>
        <NewsCard
          title={"Przekazanie swiatla pokoju"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/2/25/2016_Ko%C5%9Bci%C3%B3%C5%82_%C5%9Bw._Jana_Ewangelisty_w_Nied%C5%BAwiedniku_2.jpg"
          }
          description={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."'
          }
          date={"12.03.2137"}
        />
        <NewsCard
          title={"Przekazanie swiatla pokoju"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/2/25/2016_Ko%C5%9Bci%C3%B3%C5%82_%C5%9Bw._Jana_Ewangelisty_w_Nied%C5%BAwiedniku_2.jpg"
          }
          description={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."'
          }
          date={"12.03.2137"}
        />
        <NewsCard
          title={"Przekazanie swiatla pokoju"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/2/25/2016_Ko%C5%9Bci%C3%B3%C5%82_%C5%9Bw._Jana_Ewangelisty_w_Nied%C5%BAwiedniku_2.jpg"
          }
          description={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."'
          }
          date={"12.03.2137"}
        />
      </ContainerStyle>
    </>
  );
};

export default News;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
`;
