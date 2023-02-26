import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LandingHeader from "./LandingHeader";
import ParishHeader from "./ParishHeader";

const TheHeader = () => {
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

  return <>{isLandingHeader ? <LandingHeader /> : <ParishHeader />}</>;
};

export default TheHeader;
