import LogInForm from "components/auth/LogInForm";
import LandingHeader from "components/global/header/LandingHeader";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";

const Login = () => {
  const { query, push } = useRouter();

  const [whoIsLoggedIn, setWhoIsLoggedIn] = useState(query.who);

  useEffect(() => {
    setWhoIsLoggedIn(query.who);
    // if (!whoIsLoggedIn) push("/login?who=user");
  }, [query]);
  return (
    <>
      <LandingHeader />
      <LogInForm whoIsLogin={whoIsLoggedIn} />
    </>
  );
};

export default Login;
