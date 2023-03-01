import RegisterForm from "components/auth/RegisterForm";
import LandingHeader from "components/layout/header/LandingHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Register = () => {
  const { query, push } = useRouter();

  const [whoIsLoggedIn, setWhoIsLoggedIn] = useState(query.who);
  console.log(whoIsLoggedIn);
  useEffect(() => {
    setWhoIsLoggedIn(query.who);
    if (!whoIsLoggedIn) push("/register?who=user");
  }, [query, whoIsLoggedIn, push]);

  return (
    <>
      <RegisterForm whoIsLogin={whoIsLoggedIn} />
    </>
  );
};

export default Register;
