import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TheHeader from "../components/Global/TheHeader/TheHeader";
import SignUpForm from "../components/AuthPages/SignUpForm";

const SignUp = (props: any) => {
  const [whoIsLogin, setWhoIsLogin] = useState(""); //from where taking data in fetch

  const location = useLocation();

  useEffect(() => {
    if (!props.state.AuthAsWho) setWhoIsLogin(location.state.AuthAsWho);
    setWhoIsLogin(props.state.AuthAsWho);
  }, [location]);
  return (
    <>
      <TheHeader />
      <SignUpForm whoIsLogin={whoIsLogin} />
    </>
  );
};

export default SignUp;
