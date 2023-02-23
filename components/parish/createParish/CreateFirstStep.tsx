import Spinner from "components/global/loading/Spinner";
import InputDetails from "components/global/UI/InputDetails";
import { API_URL } from "constants/ApiURL";
import { createParishForm } from "constants/parish";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
interface ISubmitProps {
  callName: string;
  region: string;
  city: string;
  street: string;
  buildingNumber: string;
  postCode: string;
  phoneNumber: string;
  mail: string;
}
interface IProps {
  submitHandler: ({
    callName,
    region,
    city,
    street,
    buildingNumber,
    postCode,
    phoneNumber,
    mail,
  }: ISubmitProps) => void;
}

const CreateFirstStep = (props: IProps) => {
  const [callName, setCallName] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");

  const parishCallNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallName(e.target.value);
  };
  const parishRegionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };
  const parishCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const parishStreetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };
  const parishBuildingNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBuildingNumber(e.target.value);
  };
  const parishPostCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostCode(e.target.value);
  };
  const parishPhoneNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const parishMailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submitHandler({
      callName,
      region,
      city,
      street,
      buildingNumber,
      postCode,
      phoneNumber,
      mail,
    });
  };
  return (
    <>
      <FormStyle onSubmit={submit}>
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
          onInputEntering={parishCityInput}
        />
        <InputDetails
          label={createParishForm[3].text}
          placeholder={createParishForm[3].placeholder}
          id="3"
          onInputEntering={parishStreetInput}
        />
        <InputDetails
          label={createParishForm[4].text}
          placeholder={createParishForm[4].placeholder}
          id="4"
          onInputEntering={parishBuildingNumberInput}
        />
        <InputDetails
          label={createParishForm[5].text}
          placeholder={createParishForm[5].placeholder}
          id="5"
          onInputEntering={parishPostCodeInput}
        />
        <InputDetails
          label={createParishForm[6].text}
          placeholder={createParishForm[6].placeholder}
          id="6"
          onInputEntering={parishPhoneNumberInput}
        />
        <InputDetails
          label={createParishForm[7].text}
          placeholder={createParishForm[7].placeholder}
          id="7"
          onInputEntering={parishMailInput}
        />
        <button type="submit">wyslij</button>
      </FormStyle>
    </>
  );
};

export default CreateFirstStep;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
