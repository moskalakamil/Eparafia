import { useState } from "react";
import styled from "styled-components";

import { AuthAsWho, SignUpData } from "../../constants/auth";

import AuthBackground from "../global/UI/Background";
import Spinner from "components/global/loading/Spinner";
import TextDetails from "components/global/UI/TextDetails";
import InputDetails from "components/global/UI/InputDetails";
import ButtonDetails from "components/global/UI/ButtonDetails";
import Link from "next/link";

const RegisterForm = (props: { whoIsLogin: string | string[] | undefined }) => {
  console.log(props.whoIsLogin);
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

    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/${props.whoIsLogin}`,
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
              SignUpData[0].text +
              " " +
              (props.whoIsLogin ===
              AuthAsWho.priestNameForBackendEndpoint.toLowerCase()
                ? AuthAsWho.authAsPriest
                : AuthAsWho.authAsUser)
            }
            size="large"
          />
          <FormStyle onSubmit={submitHandler}>
            <InputDetails
              label={SignUpData[1].text}
              placeholder={SignUpData[1].placeholder || ""}
              id="1"
              onInputEntering={nameInputHandler}
            />
            <InputDetails
              label={SignUpData[2].text}
              placeholder={SignUpData[2].placeholder || ""}
              id="2"
              onInputEntering={surnameInputHandler}
            />
            <InputDetails
              label={SignUpData[3].text}
              placeholder={SignUpData[3].placeholder || ""}
              id="3"
              typeOfInput="email"
              onInputEntering={emailInputHandler}
            />
            <InputDetails
              label={SignUpData[4].text}
              placeholder={SignUpData[4].placeholder || ""}
              id="4"
              typeOfInput="tel"
              onInputEntering={phoneNumberInputHandler}
            />
            <InputDetails
              label={SignUpData[5].text}
              placeholder={SignUpData[5].placeholder || ""}
              id="5"
              typeOfInput="password"
              onInputEntering={passwordInputHandler}
            />

            <InputDetails
              label={SignUpData[6].text}
              placeholder={SignUpData[6].placeholder || ""}
              id="6"
              typeOfInput="password"
              onInputEntering={confirmPasswordInputHandler}
            />
            <ButtonDetails
              text={SignUpData[7].text}
              color="secondary"
              typeOfBtn="submit"
            ></ButtonDetails>
          </FormStyle>
          <p>
            {SignUpData[8].text}
            <Link
              href={
                props.whoIsLogin === AuthAsWho.priestNameForBackendEndpoint
                  ? "/login-priest"
                  : "/login"
              }
            >
              {SignUpData[8].span}
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
