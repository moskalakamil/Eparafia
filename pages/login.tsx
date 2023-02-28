import LogInForm from "components/auth/LogInForm";
import LandingHeader from "components/layout/header/LandingHeader";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Login = () => {
  const { query, push } = useRouter();

  const [whoIsLoggedIn, setWhoIsLoggedIn] = useState(query.who);
  console.log(process.env.NEXT_PUBLIC_IDENTITY_URL);
  useEffect(() => {
    setWhoIsLoggedIn(query.who);
    if (!whoIsLoggedIn) push("/login?who=user");
  }, [query, push, whoIsLoggedIn]);
  return (
    <>
      <LogInForm whoIsLogin={whoIsLoggedIn} />
    </>
  );
};
export default Login;
