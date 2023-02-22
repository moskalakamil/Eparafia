import InputDetails from "components/global/UI/InputDetails";
import { createParishForm } from "constants/parish";
import React, { useState } from "react";
import styled from "styled-components";

const CreateFirstStep = () => {
  const [parishCallName, setParishCallName] = useState("");
  const [region, setRegion] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [postCode, setPostCode] = useState("");

  const parishCallNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParishCallName(event.target.value);
  };
  const parishRegionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value);
  };
  const parishStreetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  const parishBuildingNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBuildingNumber(event.target.value);
  };
  const parishPostCodeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCode(event.target.value);
  };
  return (
    <FormStyle>
      <InputDetails
        label={createParishForm[0].text}
        placeholder={createParishForm[0].placeholder}
        id="0"
        onInputEntering={parishCallNameInput}
      />
      <InputDetails
        label={createParishForm[1].text}
        placeholder={createParishForm[1].placeholder}
        id="1"
        onInputEntering={parishRegionInput}
      />
      <InputDetails
        label={createParishForm[2].text}
        placeholder={createParishForm[2].placeholder}
        id="2"
        onInputEntering={parishStreetInput}
      />
      <InputDetails
        label={createParishForm[3].text}
        placeholder={createParishForm[3].placeholder}
        id="3"
        onInputEntering={parishBuildingNumberInput}
      />
      <InputDetails
        label={createParishForm[4].text}
        placeholder={createParishForm[4].placeholder}
        id="4"
        onInputEntering={parishPostCodeInput}
      />
    </FormStyle>
  );
};

export default CreateFirstStep;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
