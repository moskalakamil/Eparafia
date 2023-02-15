import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ParishEditingNews } from "../../../../constants/parish";
import { bigText, smallText } from "../../../../style/TextSize";
import BtnGoBack from "../../../Global/UI/BtnGoBack";
import TextDetails from "../../../Global/UI/TextDetails";

const ParishNewsEditHeader = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  }, []);
  window.addEventListener("resize", () => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  });
  return (
    <HeadingOfEditingNewsStyle>
      <BtnGoBack windowWidth={windowWidth} minWidthTextVisible={1220} />
      <TextDetails
        text={ParishEditingNews.heading}
        size={bigText.size}
        weight={bigText.weight}
        align="center"
      />
      {windowWidth > 1220 && (
        <div>
          <TextDetails
            text={ParishEditingNews.dateText}
            size={smallText.size}
          />
          <TextDetails text={"23.10.2022"} size={smallText.size} />
        </div>
      )}
    </HeadingOfEditingNewsStyle>
  );
};

export default ParishNewsEditHeader;

const HeadingOfEditingNewsStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1300px) {
    justify-content: space-between;
  }
`;
