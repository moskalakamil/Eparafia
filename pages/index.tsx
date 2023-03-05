import Head from "next/head";
// import Image from "next/image";

import LandingHeader from "components/layout/header/LandingHeader";
import HeroBackground from "components/global/hero/HeroBackground";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IState } from "store/store";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  const parishName = useSelector((state: IState) => state.auth.parish.callName);

  const isPriest =
    useSelector((state: IState) => state.auth.role) === "Priest" ? true : false;

  useEffect(() => {
    isPriest && parishName && push(`/parish/${parishName}`);
  }, []);

  return (
    <>
      <HeroBackground isLandingPage="true" />
    </>
  );
}
