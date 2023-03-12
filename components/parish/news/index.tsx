import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

import styled from "styled-components";

import ParishNewsHeading from "./NewsHeading";

const News = () => {
  const { t } = useTranslation();
  return (
    <>
      <ParishNewsHeading />
      <ContainerStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            size="medium"
            weight="large"
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <Image
              src="/images/background.png"
              alt="background"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link href={"asd"}>{t("parish-news -> read more")}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" size="medium" />
            <ButtonDetails
              text={t("parish-news -> edit news")}
              color="secondary"
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            weight="large"
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <Image
              src="/images/background.png"
              alt="background"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link href={"asd"}>{t("parish-news -> read more")}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" />
            <ButtonDetails
              text={t("parish-news -> edit news")}
              color="secondary"
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
        <NewsCardStyle>
          <TextDetails
            text={"Przekazanie swiatla pokoju"}
            weight="large"
            underline={true}
            align="center"
          />
          <ImageDivStyle>
            <Image
              src="/images/background.png"
              alt="background"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </ImageDivStyle>
          <TextStyle>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa, pulvinar quis cursus ut, varius interdum Etiam non accumsan turpis, ac vestibulum tellus. Duis urna massa...."
            }
            <Link href={"asd"}>{t("parish-news -> read more")}</Link>
          </TextStyle>
          <DownSideStyle>
            <TextDetails text="69.13.2137" />
            <ButtonDetails
              text={t("parish-news -> edit news")}
              color="secondary"
              width="50%"
            />
          </DownSideStyle>
        </NewsCardStyle>
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
const NewsCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  min-width: 500px;
  padding: 5%;
`;
const ImageDivStyle = styled.div`
  position: relative;
  margin: 5% 0;
  width: 400px;
  height: 240px;
`;
const TextStyle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small.pc};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0 2%;
  }
`;

const DownSideStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
