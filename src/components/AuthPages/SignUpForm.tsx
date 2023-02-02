import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/AuthSlice";

import LoadingSpinner from "../Global/Loading/LoadingSpinner";
import TextDetails from "../Global/UI/TextDetails/TextDetails";
import AuthBackground from "./AuthBackground";

import { AuthAsWho, SignUpData } from "../../constants/auth";
import { bigText } from "../../style/TextSize";
import AuthInterface from "../../models/authModel";
import { BaseURL } from "../../constants/baseURL";
import ButtonDetails from "../Global/UI/ButtonDetails";
import { secondary } from "../../style/Colors";

const SignupForm = (props: { whoIsLogin: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const whoIsAuthenticated = useSelector(
    (state: AuthInterface) => state.auth.whoIsAuthenticated
  );

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

    dispatch(authAction.logIn(props.whoIsLogin));
    if (props.whoIsLogin === "priest") {
      navigate("/priest");
    } else navigate("/");
    //   try {
    //     setIsLoading(true);
    //     setError("");

    // const res = await fetch(`${BaseURL + props.whoIsLogin}/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: enteredName,
    //     surname: enteredSurname,
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     confirmPassword: enteredConfirmPassword,
    //     contact: {
    //       phoneNumber: enteredPhoneNumber,
    //       email: enteredEmail,
    //     },
    //   }),
    // });
    //     const data = await res.json();

    //     if (!res.ok) {
    //       let errorMessage = data.Errors.Password || data.Errors.Email;
    //       // if (errorMessage === "User not found")
    //       //   errorMessage = "Nie znaleziono użytkownika";
    //       // else if (errorMessage === "Bad password")
    //       //   errorMessage = "Błędne hasło, spróbuj ponownie";
    //       // else errorMessage = "Coś poszło nie tak, spróbuj ponownie";

    //       throw new Error(errorMessage);
    //     }
    //     dispatch(authAction.logIn(data.data.jwt));
    //   } catch (err: any) {
    //     setError(err.message);
    //   }
    //   setIsLoading(false);
  };

  return (
    <AuthBackground>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TextDetails
            text={
              SignUpData[0].text +
              " " +
              (props.whoIsLogin === "priest"
                ? AuthAsWho.authAsPriest
                : AuthAsWho.authAsUser)
            }
            size={bigText.size}
          />
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
            <ButtonDetails
              text={SignUpData[7].text}
              color={secondary}
              typeOfBtn="submit"
            ></ButtonDetails>
          </FormStyle>
          <p>
            {SignUpData[8].text}
            <Link
              to={props.whoIsLogin === "priest" ? "/login-priest" : "/login"}
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
