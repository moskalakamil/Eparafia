import { useState } from "react";
import styled from "styled-components";

import AuthBackground from "../global/UI/Background";
import Spinner from "components/global/loading/Spinner";
import TextDetails from "components/global/UI/TextDetails";
import InputDetails from "components/global/UI/InputDetails";
import ButtonDetails from "components/global/UI/ButtonDetails";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const RegisterForm = (props: { whoIsLogin: string | string[] | undefined }) => {
  const { t } = useTranslation("auth");

  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const surnameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSurname(event.target.value);
  };

  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNumberInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPhoneNumber(event.target.value);
  };

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const confirmPasswordInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whoBackendEndpoint =
      props.whoIsLogin === "parishioner" ? "User" : "Priest";

    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/${whoBackendEndpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            surname: enteredSurname,
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            contact: {
              phoneNumber: enteredPhoneNumber,
              email: enteredEmail,
            },
          }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        let errorMessage = data.Errors.Password || data.Errors.Email;
        // if (errorMessage === "User not found")
        //   errorMessage = "Nie znaleziono użytkownika";
        // else if (errorMessage === "Bad password")
        //   errorMessage = "Błędne hasło, spróbuj ponownie";
        // else errorMessage = "Coś poszło nie tak, spróbuj ponownie";

        throw new Error(errorMessage);
      }
    } catch (err: any) {
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
              props.whoIsLogin === "priest"
                ? t("register-header -> register as priest")
                : t("register-header -> register as parishioner")
            }
            size="large"
          />
          <FormStyle onSubmit={submitHandler}>
            <InputDetails
              label={t("auth-label -> name")}
              placeholder={t("auth-placeholder -> enter your name")}
              id="name"
              onInputEntering={nameInputHandler}
            />
            <InputDetails
              label={t("auth-label -> surname")}
              placeholder={t("auth-placeholder -> enter your surname")}
              id="surname"
              onInputEntering={surnameInputHandler}
            />
            <InputDetails
              label={t("auth-label -> email adress")}
              placeholder={t("auth-placeholder -> enter your email")}
              id="mail"
              typeOfInput="email"
              onInputEntering={emailInputHandler}
            />
            <InputDetails
              label={t("auth-label -> phone number")}
              placeholder={t("auth-placeholder -> enter your phone number")}
              id="phone"
              typeOfInput="tel"
              onInputEntering={phoneNumberInputHandler}
            />
            <InputDetails
              label={t("auth-label -> password")}
              placeholder={t("auth-placeholder -> enter your password")}
              id="password"
              typeOfInput="password"
              onInputEntering={passwordInputHandler}
            />

            <InputDetails
              label={t("auth-label -> confirm password")}
              placeholder={t("auth-placeholder -> confirm password")}
              id="confirmpassword"
              typeOfInput="password"
              onInputEntering={confirmPasswordInputHandler}
            />
            <ButtonDetails
              text={t("register-btn -> register")}
              color="secondary"
              typeOfBtn="submit"
            ></ButtonDetails>
          </FormStyle>
          <p>
            {t("auth -> have account?") + " "}
            <Link
              href={props.whoIsLogin === "priest" ? "/login-priest" : "/login"}
            >
              {t("have account span -> login")}
            </Link>
          </p>
          {error.length !== 0 && <ErrorStyle>{error}</ErrorStyle>}
        </>
      )}
    </AuthBackground>
  );
};

export default RegisterForm;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid #858585;
    outline: none;
    padding: 15px;
    margin: 5px 0;
  }
  & label {
    margin: 10px 0;
  }
`;
const ErrorStyle = styled.p`
  color: red;
`;
const LabelStyle = styled.label`
  margin: 0;
  font-size: 25px;
`;
const ButtonStyle = styled.button`
  background-color: #8abaf2;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
`;
