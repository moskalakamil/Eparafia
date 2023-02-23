import RegisterForm from "components/auth/RegisterForm";
import LandingHeader from "components/global/header/LandingHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUp = () => {
  const { query, push } = useRouter();

  const [whoIsLoggedIn, setWhoIsLoggedIn] = useState(query.who);
  console.log(whoIsLoggedIn);
  useEffect(() => {
    setWhoIsLoggedIn(query.who);
    if (!whoIsLoggedIn) push("/register?who=user");
  }, [query, whoIsLoggedIn, push]);

  return (
    <>
      <LandingHeader />
      <RegisterForm whoIsLogin={whoIsLoggedIn} />
    </>
  );
};

export default SignUp;
