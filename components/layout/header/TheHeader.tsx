import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LandingHeader from "./LandingHeader";
import ParishHeader from "./ParishHeader";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "store/auth-slice";

const TheHeader = (props: any) => {
  const dispatch = useDispatch();

  const jwt = useSelector((state: any) => state.auth.token);
  console.log("the");

  const { pathname } = useRouter();

  const [isLandingHeader, setIsLandingHeader] = useState(true);

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
