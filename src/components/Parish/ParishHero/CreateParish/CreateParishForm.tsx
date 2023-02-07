import React, { useState } from "react";
import styled from "styled-components";
import { createParish } from "../../../../constants/parish";
import { primary } from "../../../../style/Colors";
import { bigText, normalText } from "../../../../style/TextSize";
import TextDetails from "../../../Global/UI/TextDetails";
import CreateParishPagination from "./CreateParishPagination";
import FirstStepCreateParish from "./FirstStepCreateParish";

const CreateParishForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (num: number) => {
    setCurrentPage(num);
  };
  return (
    <ContainerStyle>
      <TextDetails
        text={createParish.headingText}
        size={bigText.size}
        weight={bigText.weight}
        underline={true}
        margin={"3%"}
      />
      <WrapperStyle>
        <TextDetails
          text={createParish.text}
          size={normalText.size}
          color={primary}
          align="center"
        />
        <CreateParishPagination
          currentPage={currentPage}
          changePage={changePage}
        />
        {currentPage === 1 && <FirstStepCreateParish />}
      </WrapperStyle>
    </ContainerStyle>
  );
};

export default CreateParishForm;
const ContainerStyle = styled.div`
  margin-top: 140px;
`;
const WrapperStyle = styled.div`
  width: 60%;
  margin: 0 auto;
`;
