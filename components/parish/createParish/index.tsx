import TextDetails from "components/global/UI/TextDetails";
import CreateFirstStep from "components/parish/createParish/CreateFirstStep";
import CreateParishPagination from "components/parish/createParish/CreateParishPagination";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Spinner from "components/global/loading/Spinner";
import { useTranslation } from "next-i18next";
import { useAppDispatch } from "store/store";
import { fetchUserData } from "store/auth-slice";

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

const CreateParish = () => {
  const { t } = useTranslation("parish");

  const dispatch = useAppDispatch();

  const jwt = useSelector((state: any) => state.auth.jwt);

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (num: number) => {
    setCurrentPage(num);
  };

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
    console.log(jwt);
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Parish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
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

      dispatch(fetchUserData(jwt));
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };
  return (
    <ContainerStyle>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TextDetails
            text={t("create-parish-header -> welcome in eparafia")}
            size="large"
            weight="large"
            underline={true}
            margin={"3%"}
          />
          <WrapperStyle>
            <TextDetails
              text={t("create-parish-second-header -> create parish")}
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
        </>
      )}
    </ContainerStyle>
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
