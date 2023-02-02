import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TheHeader from "../components/Global/TheHeader/TheHeader";
import SignUpForm from "../components/AuthPages/SignUpForm";

const SignUp = (props: { state: string }) => {
  const location = useLocation();

  const [whoIsLogin, setWhoIsLogin] = useState(""); //from where taking data in fetch

  useEffect(() => {
    if (!props.state) setWhoIsLogin(location.state);
    setWhoIsLogin(props.state);
  }, [location]);
  return (
    <>
      <TheHeader />
      <SignUpForm whoIsLogin={whoIsLogin} />
    </>
  );
};

export default SignUp;
