import Head from "next/head";
// import Image from "next/image";

import LandingHeader from "components/layout/header/LandingHeader";
import HeroBackground from "components/global/hero/HeroBackground";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "store/auth-slice";

export default function Home() {
  const dispatch = useDispatch<any>();
  const jwt = useSelector((state: any) => state.auth.token);
  useEffect(() => {
    dispatch(fetchUserData(jwt));
  }, []);

  return (
    <>
      <HeroBackground isLandingPage="true" />
    </>
  );
}
