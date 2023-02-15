import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ParishNewsData } from "../../../constants/parish";
import { primary, secondary } from "../../../style/Colors";
import {
  bigText,
  extraBigText,
  normalText,
  smallText,
} from "../../../style/TextSize";
import ButtonDetails from "../../Global/UI/ButtonDetails";
import TextDetails from "../../Global/UI/TextDetails";
import ParishNewsHeading from "./ParishNewsHeading";

const ParishNews = () => {
  return (
    <>
      <ParishNewsHeading />
      <ContainerStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            size={normalText.size}
            weight={bigText.weight}
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <img src="/images/Global/background.png" />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link to={"asd"}>{ParishNewsData.readMore}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" size={normalText.size} />
            <ButtonDetails
              text={ParishNewsData.edit}
              color={secondary}
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            size={normalText.size}
            weight={bigText.weight}
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <img src="/images/Global/background.png" />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link to={"asd"}>{ParishNewsData.readMore}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" size={normalText.size} />
            <ButtonDetails
              text={ParishNewsData.edit}
              color={secondary}
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            size={normalText.size}
            weight={bigText.weight}
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <img src="/images/Global/background.png" />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link to={"asd"}>{ParishNewsData.readMore}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" size={normalText.size} />
            <ButtonDetails
              text={ParishNewsData.edit}
              color={secondary}
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
      </ContainerStyle>
    </>
  );
};

export default ParishNews;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
`;
const NewsCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  min-width: 500px;
  padding: 5%;
`;
const ImageDivStyle = styled.div`
  margin: 5% 0;
  width: 400px;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const TextStyle = styled.p`
  font-size: ${smallText.size};

  a {
    text-decoration: none;
    color: ${primary};
    margin: 0 2%;
  }
`;

const DownSideStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
