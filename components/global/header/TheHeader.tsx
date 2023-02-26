import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LandingHeader from "./LandingHeader";
import ParishHeader from "./ParishHeader";

const TheHeader = () => {
  const { pathname } = useRouter();

  const [isLanding, setIsLanding] = useState(true);

  useEffect(() => {
    if (!pathname.includes("/parish/")) return;
    setIsLanding(true);
    return () => {
      setIsLanding(false);
    };
  }, [pathname]);
  console.log(pathname, isLanding);

  return <>{isLanding ? <LandingHeader /> : <ParishHeader />}</>;
};

export default TheHeader;
