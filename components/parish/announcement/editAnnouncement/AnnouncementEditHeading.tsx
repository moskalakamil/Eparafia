import BtnEditGoBack from "components/global/UI/BtnEditGoBack";
import TextDetails from "components/global/UI/TextDetails";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const AnnouncementEditHeader = () => {
  const { t } = useTranslation();
  const { query } = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }
  return (
    <HeadingOfEditingNewsStyle>
      <BtnEditGoBack
        windowWidth={windowWidth}
        minWidthTextVisible={1300}
        parishName={query.ParishName}
      />
      <TextDetails
        text={t("edit-announcement-header -> edit announcement")}
        size="large"
        weight="large"
        align="center"
      />
      {windowWidth > 1300 && (
        <div>
          <TextDetails
            text={t(
              "edit-announcement-date-text -> date when announcement was added"
            )}
            size="small"
          />
          <TextDetails text={"23.10.2022"} size="small" />
        </div>
      )}
    </HeadingOfEditingNewsStyle>
  );
};

export default AnnouncementEditHeader;

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
