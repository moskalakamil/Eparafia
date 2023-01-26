import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TheHeader from "../components/Global/TheHeader/TheHeader";
import LogInForm from "../components/AuthPages/LogInForm";

const LogIn = (props: any) => {
  const [whoIsLogin, setWhoIsLogin] = useState(""); //from where taking data in fetch

  const location = useLocation();

  useEffect(() => {
    if (!props.state.AuthAsWho) setWhoIsLogin(location.state.AuthAsWho);
    setWhoIsLogin(props.state.AuthAsWho);
  }, [location]);
  return (
    <>
      <TheHeader />
      <LogInForm whoIsLogin={whoIsLogin} />
    </>
  );
};

export default LogIn;
