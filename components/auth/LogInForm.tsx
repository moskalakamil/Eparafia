import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "components/global/loading/Spinner";
// import { useDispatch } from "react-redux";

import { AuthAsWho, LoginData } from "../../constants/auth";
import AuthBackground from "../global/UI/Background";
import TextDetails from "components/global/UI/TextDetails";
import InputDetails from "components/global/UI/InputDetails";
import ButtonDetails from "components/global/UI/ButtonDetails";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { authAction } from "store/auth-slice";
import { GetServerSideProps } from "next";

interface IProps {
  whoIsLogin: string | string[] | undefined;
}

const LogInForm = ({ whoIsLogin }: IProps) => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const emailInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredMail(event.target.value);
  };
  const passwordInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/${whoIsLogin}/login`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredMail,
            password: enteredPassword,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        let errorMessage = data.Errors.Message[0];
        if (errorMessage === "User not found")
          errorMessage = "Nie znaleziono użytkownika";
        else if (errorMessage === "Bad password")
          errorMessage = "Błędne hasło, spróbuj ponownie";
        else errorMessage = "Coś poszło nie tak, spróbuj ponownie";

        throw new Error(errorMessage);
      } else {
        dispatch(authAction.logIn(data.data.jwt));
        if (
          whoIsLogin === AuthAsWho.priestNameForBackendEndpoint.toLowerCase()
        ) {
          push("/parish");
        } else push("/");
      }
    } catch (err: any) {
      // console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };
  return (
    <AuthBackground>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TextDetails
            text={
              LoginData[0].text +
              " " +
              (whoIsLogin ===
              AuthAsWho.priestNameForBackendEndpoint.toLowerCase()
                ? AuthAsWho.authAsPriest
                : AuthAsWho.authAsUser)
            }
            size="large"
          />
          <FormStyle onSubmit={submitHandler}>
            <InputDetails
              label={LoginData[1].text}
              placeholder={LoginData[1].placeholder || ""}
              id="1"
              typeOfInput="email"
              onInputEntering={emailInput}
            />
            <InputDetails
              label={LoginData[2].text}
              placeholder={LoginData[2].placeholder || ""}
              id="2"
              typeOfInput="password"
              onInputEntering={passwordInput}
            />
            <p>{LoginData[3].text}</p>
            <ButtonDetails
              text={LoginData[4].text}
              color="secondary"
              typeOfBtn="submit"
            ></ButtonDetails>
          </FormStyle>
          <p>
            {LoginData[5].text}
            <Link
              href={
                whoIsLogin === AuthAsWho.priestNameForBackendEndpoint
                  ? "/register?who=priest"
                  : "/register?who=user"
              }
            >
              {LoginData[5].span}
            </Link>
          </p>
          {error.length !== 0 && <ErrorStyle>{error}</ErrorStyle>}
        </>
      )}
    </AuthBackground>
  );
};

export default LogInForm;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
const ErrorStyle = styled.p`
  color: red;
`;
