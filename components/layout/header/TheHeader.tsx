import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LandingHeader from "./LandingHeader";
import ParishHeader from "./ParishHeader";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "store/auth-slice";

const TheHeader = (props: any) => {
  const { pathname } = useRouter();

  const token = useSelector((state: any) => state.auth.jwt);

  const [jwt, setJwt] = useState("");

  const [isLandingHeader, setIsLandingHeader] = useState(true);

  useEffect(() => {
    setJwt(token);
  }, [token]);

  useEffect(() => {
    if (
      !pathname.includes("/parish/") ||
      pathname === "/parish/create-parish"
    ) {
      setIsLandingHeader(true);
    } else {
      setIsLandingHeader(false);
    }
  }, [pathname]);

  return (
    <>
      {isLandingHeader ? (
        <LandingHeader isAuthenticated={jwt ? true : false} />
      ) : (
        <ParishHeader isAuthenticated={jwt ? true : false} />
      )}
    </>
  );
};

export default TheHeader;
