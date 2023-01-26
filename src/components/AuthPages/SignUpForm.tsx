import { useState } from "react";
import { Link } from "react-router-dom";

import { SignUpData } from "../../constants/auth";
import LoadingSpinner from "../Global/Loading/LoadingSpinner";
import styled from "styled-components";
import AuthBackground from "./AuthBackground";
import TextDetails from "../Global/UI/TextDetails/TextDetails";
import { bigText } from "../../style/TextSize";

const SignupForm = (props: { whoIsLogin: string }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailErrpr, setEmailErrpr] = useState("");
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
        `http://91.227.2.183:83/${props.whoIsLogin}/register`,
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
        <LoadingSpinner />
      ) : (
        <>
          <TextDetails text={SignUpData[0].text} size={bigText.size} />
          <FormStyle onSubmit={submitHandler}>
            <LabelStyle htmlFor={SignUpData[1].text}>
              {SignUpData[1].text}
            </LabelStyle>
            <input
              onInput={nameInputHandler}
              id={SignUpData[1].text}
              type={SignUpData[1].type}
              required
              placeholder={SignUpData[1].placeholder}
            />
            <LabelStyle htmlFor={SignUpData[2].text}>
              {SignUpData[2].text}
            </LabelStyle>
            <input
              onInput={surnameInputHandler}
              id={SignUpData[2].text}
              type={SignUpData[2].type}
              required
              placeholder={SignUpData[2].placeholder}
            />
            <LabelStyle htmlFor={SignUpData[3].text}>
              {SignUpData[3].text}
            </LabelStyle>
            <input
              onInput={emailInputHandler}
              id={SignUpData[3].text}
              type={SignUpData[3].type}
              required
              placeholder={SignUpData[3].placeholder}
            />
            <LabelStyle htmlFor={SignUpData[4].text}>
              {SignUpData[4].text}
            </LabelStyle>
            <input
              onInput={phoneNumberInputHandler}
              id={SignUpData[4].text}
              type={SignUpData[4].type}
              required
              placeholder={SignUpData[4].placeholder}
            />
            <LabelStyle htmlFor={SignUpData[5].text}>
              {SignUpData[5].text}
            </LabelStyle>
            <input
              onInput={passwordInputHandler}
              id={SignUpData[5].text}
              type={SignUpData[5].type}
              required
              placeholder={SignUpData[5].placeholder}
            />
            <LabelStyle htmlFor={SignUpData[6].text}>
              {SignUpData[6].text}
            </LabelStyle>
            <input
              onInput={confirmPasswordInputHandler}
              id={SignUpData[6].text}
              type={SignUpData[6].type}
              required
              placeholder={SignUpData[6].placeholder}
            />
            <button type="submit">{SignUpData[7].text}</button>
          </FormStyle>
          <p>
            {SignUpData[8].text}
            <Link to={"/"}>{SignUpData[8].span}</Link>
          </p>
          {error.length !== 0 && <ErrorStyle>{error}</ErrorStyle>}
        </>
      )}
    </AuthBackground>
  );
};

export default SignupForm;

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
    margin: 5px 0;
  }
`;
const ErrorStyle = styled.p`
  color: red;
`;
export const LabelStyle = styled.label`
  margin: 0;
  font-size: 25px;
`;
