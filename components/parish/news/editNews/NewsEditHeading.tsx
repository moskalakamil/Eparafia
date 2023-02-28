import BtnEditGoBack from "components/global/UI/BtnEditGoBack";
import TextDetails from "components/global/UI/TextDetails";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ParishEditingNews } from "../../../../constants/parish";

const NewsEditHeader = () => {
  const { query } = useRouter();
  console.log(query.ParishName);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  }, []);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWindowWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    });
  }
  return (
    <HeadingOfEditingNewsStyle>
      <BtnEditGoBack
        windowWidth={windowWidth}
        minWidthTextVisible={1220}
        parishName={query.ParishName}
      />
      <TextDetails
        text={ParishEditingNews.heading}
        size="large"
        weight="large"
        align="center"
      />
      {windowWidth > 1220 && (
        <div>
          <TextDetails text={ParishEditingNews.dateText} size="small" />
          <TextDetails text={"23.10.2022"} size="small" />
        </div>
      )}
    </HeadingOfEditingNewsStyle>
  );
};

export default NewsEditHeader;

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
