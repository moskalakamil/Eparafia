import LandingHeader from "components/global/header/LandingHeader";
import TextDetails from "components/global/UI/TextDetails";
import CreateFirstStep from "components/parish/createParish/CreateFirstStep";
import CreateParishPagination from "components/parish/createParish/CreateParishPagination";
import { API_URL } from "constants/ApiURL";
import { createParish } from "constants/parish";
import { useState } from "react";
import styled from "styled-components";

const CreateParish = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (num: number) => {
    setCurrentPage(num);
  };
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

  const submitHandler = async ({
    callName,
    region,
    city,
    street,
    buildingNumber,
    postCode,
    phoneNumber,
    mail,
  }: ISubmitProps) => {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${API_URL}/Parish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          callName,
          address: {
            region,
            city,
            street,
            buildingNumber,
            postCode,
          },
          contact: {
            phoneNumber,
            email: mail,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        let errorMessage = data.Errors.Message[0];
        throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };
  return (
    <>
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
          {currentPage === 1 && (
            <CreateFirstStep submitHandler={submitHandler} />
          )}
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
