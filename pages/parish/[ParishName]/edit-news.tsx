import ParishHeader from "components/global/header/ParishHeader";
import NewsEditForm from "components/parish/news/editNews";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";

import styled from "styled-components";

const ParishNewsEdit = () => {
  return (
    <>
      <NewsEditHeader />
      <NewsEditForm />
    </>
  );
};

export default ParishNewsEdit;
