import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import Image from "next/image";

interface INewsData {
  title: string;
  image: string;
  description: string;
  date: string;
}

const NewsCard = ({ title, image, description, date }: INewsData) => {
  const { t } = useTranslation("parish");
  return (
    <NewsCardStyle>
      <TextDetails
        text={title}
        size="medium"
        weight="large"
        underline={true}
        align="center"
      />
      <ImageDivStyle>
        <Image
          src={image}
          alt="background"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </ImageDivStyle>
      <TextDetails text={description} size="small"></TextDetails>
      <Link href={"asd"}>{t("parish-news -> read more")}</Link>
      <DownSideStyle>
        <TextDetails text={date} size="medium" />
        <ButtonDetails
          text={t("parish-news -> edit news")}
          color="secondary"
          width="50%"
        />
      </DownSideStyle>
    </NewsCardStyle>
  );
};

export default NewsCard;

const NewsCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 5%;
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0 2%;
    margin-left: 70%;

    @media (min-width: 1200px) {
      margin-left: 13vw;
    }
  }

  @media (min-width: 1200px) {
    width: calc(100% / 3);
    /* min-width: 500px; */
  }
`;
const ImageDivStyle = styled.div`
  position: relative;
  margin: 5% 0;
  width: 100%;
  height: 35vw;
  @media (min-width: 1200px) {
    height: 12vw;
  }
`;

const DownSideStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
