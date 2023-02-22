import LandingHeader from "components/global/header/LandingHeader";
import TextDetails from "components/global/UI/TextDetails";
import CreateFirstStep from "components/parish/createParish/CreateFirstStep";
import CreateParishPagination from "components/parish/createParish/CreateParishPagination";
import { createParish } from "constants/parish";
import { useState } from "react";
import styled from "styled-components";

const CreateParish = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (num: number) => {
    setCurrentPage(num);
  };
  return (
    <>
      <LandingHeader />
      <ContainerStyle>
        <TextDetails
          text={createParish.headingText}
          size="large"
          weight="large"
          underline={true}
          margin={"3%"}
        />
        <WrapperStyle>
          <TextDetails
            text={createParish.text}
            size="medium"
            color="primary"
            align="center"
          />
          <CreateParishPagination
            currentPage={currentPage}
            changePage={changePage}
          />
          {currentPage === 1 && <CreateFirstStep />}
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default CreateParish;
const ContainerStyle = styled.div`
  margin-top: 140px;
`;
const WrapperStyle = styled.div`
  width: 60%;
  margin: 0 auto;
`;
