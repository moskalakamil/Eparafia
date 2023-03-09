import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import InputDetails from "components/global/UI/InputDetails";
import ButtonDetails from "components/global/UI/ButtonDetails";
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
  const { t } = useTranslation("parish");

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
          label={t("create-parish-label -> call name")}
          placeholder={t("create-parish-placeholder -> enter call name")}
          id="0"
          onInputEntering={parishCallNameInput}
        />
        <InputDetails
          label={t("create-parish-label -> region")}
          placeholder={t("create-parish-placeholder -> enter region")}
          id="1"
          onInputEntering={parishRegionInput}
        />
        <InputDetails
          label={t("create-parish-label -> city")}
          placeholder={t("create-parish-placeholder -> enter city")}
          id="2"
          onInputEntering={parishCityInput}
        />
        <InputDetails
          label={t("create-parish-label -> street")}
          placeholder={t("create-parish-placeholder -> enter street")}
          id="3"
          onInputEntering={parishStreetInput}
        />
        <InputDetails
          label={t("create-parish-label -> building number")}
          placeholder={t("create-parish-placeholder -> enter building number")}
          id="4"
          onInputEntering={parishBuildingNumberInput}
        />
        <InputDetails
          label={t("create-parish-label -> post code")}
          placeholder={t("create-parish-placeholder -> enter post code")}
          id="5"
          onInputEntering={parishPostCodeInput}
        />
        <InputDetails
          label={t("create-parish-label -> parish phone number")}
          placeholder={t(
            "create-parish-placeholder -> enter parish phone number"
          )}
          id="6"
          onInputEntering={parishPhoneNumberInput}
        />
        <InputDetails
          label={t("create-parish-label -> parish email")}
          placeholder={t("create-parish-placeholder -> enter parish email")}
          id="7"
          onInputEntering={parishMailInput}
        />
        <ButtonDetails
          typeOfBtn="submit"
          text={t("create-parish-submit-btn -> send")}
          color="secondary"
        />
      </FormStyle>
    </>
  );
};

export default CreateFirstStep;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
