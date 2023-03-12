import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { fetchUserData } from "store/auth-slice";
import { useAppDispatch } from "store/store";

import Spinner from "components/global/loading/Spinner";
import ButtonDetails from "components/global/UI/ButtonDetails";
import AuthBackground from "components/global/UI/Background";
import TextDetails from "components/global/UI/TextDetails";
import InputDetails from "components/global/UI/InputDetails";

interface IProps {
  whoIsLogin: string | string[] | undefined;
}

const LogInForm = ({ whoIsLogin }: IProps) => {
  const { t } = useTranslation("auth");

  const dispatch = useAppDispatch();
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

    const whoBackendEndpoint = whoIsLogin === "parishioner" ? "User" : "Priest";

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/${whoBackendEndpoint}/login`,

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
        console.log(data.data.jwt);
        dispatch(fetchUserData(data.data.jwt));

        if (whoIsLogin === "priest") push("/parish");
        else push("/");
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
              whoIsLogin === "priest"
                ? t("login-header -> login as priest")
                : t("login-header -> login as parishioner")
            }
            size="large"
          />
          <FormStyle onSubmit={submitHandler}>
            <InputDetails
              label={t("auth-label -> email adress")}
              placeholder={t("auth-placeholder -> enter your email")}
              id="email"
              typeOfInput="email"
              onInputEntering={emailInput}
            />
            <InputDetails
              label={t("auth-label -> password")}
              placeholder={t("auth-placeholder -> enter your password")}
              id="password"
              typeOfInput="password"
              onInputEntering={passwordInput}
            />
            <p>{t("auth -> dont remember password")}</p>
            <ButtonDetails
              text={t("register-btn -> register")}
              color="secondary"
              typeOfBtn="submit"
            ></ButtonDetails>
          </FormStyle>
          <p>
            {t("auth -> dont have account?") + " "}
            <Link
              href={
                whoIsLogin === "priest"
                  ? "/register?who=priest"
                  : "/register?who=user"
              }
            >
              {t("dont have account span -> register")}
            </Link>
          </p>
          {error.length !== 0 && <PErrorStyle>{error}</PErrorStyle>}
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
const PErrorStyle = styled.p`
  color: red;
`;
