import ButtonDetails from "components/global/UI/ButtonDetails";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const NewsEditForm = () => {
  const { t } = useTranslation();
  return (
    <FormStyle>
      <FormLeftContainerStyle>
        <InputContainerStyle>
          <label>{t("edit-news-header -> edit news")}</label>
          <TextareaStyle height="100px"></TextareaStyle>
        </InputContainerStyle>
        <InputContainerStyle>
          <label>{t("edit-news-image -> image")}</label>
          <PhotoDivStyle>
            <Image
              src="/images/background.png"
              alt=""
              width={400}
              height={240}
            ></Image>
            <ButtonDetails text={t("edit-news-change-image -> change image")} />
          </PhotoDivStyle>
        </InputContainerStyle>
      </FormLeftContainerStyle>
      <InputContainerStyle>
        <label>{t("edit-news-describe -> describe")}</label>
        <TextareaStyle height="480px"></TextareaStyle>
      </InputContainerStyle>
    </FormStyle>
  );
};

export default NewsEditForm;

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
const FormLeftContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  label {
    width: calc(100% - 400px);
    text-align: right;
    margin: 0 20px;
    font-size: ${(props) => props.theme.fontSizes.medium.pc};
    font-weight: ${(props) => props.theme.fontWeights.large};
  }
`;
const PhotoDivStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ImgStyle = styled.img`
  width: 400px;
  height: 240px;
`;

const TextareaStyle = styled.textarea<{ height: string }>`
  font-size: ${(props) => props.theme.fontSizes.small.pc};
  min-width: 400px;
  width: 400px;
  height: ${(props) => props.height};
  padding: 8px;
  outline: none;
  background-color: #f0f0f0;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid #858585 !important;
  resize: none;

  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border: 3px solid #f0f0f0;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #666;
  }
  ::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 20px;
  }
`;
