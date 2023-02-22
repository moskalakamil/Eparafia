import ParishHeader from "components/global/header/ParishHeader";
import NewsEditForm from "components/parish/news/editNews";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";

import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const ParishNewsEdit = () => {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query);
  }, [query.id]);

  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <NewsEditHeader />
        <NewsEditForm />
      </ContainerStyle>
    </>
  );
};

export default ParishNewsEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
