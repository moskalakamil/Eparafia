import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogInForm from "../components/AuthPages/LogInForm";
import TheHeader from "../components/Global/TheHeader/TheHeader";

const LogIn = (props: { state: string }) => {
  const [whoIsLogin, setWhoIsLogin] = useState(""); //from where taking data in fetch

  const location = useLocation();

  useEffect(() => {
    if (!props.state) setWhoIsLogin(location.state);
    setWhoIsLogin(props.state);
  }, [location]);
  return (
    <>
      <TheHeader />
      <LogInForm whoIsLogin={whoIsLogin} />
    </>
  );
};

export default LogIn;
