import Head from "next/head";
// import Image from "next/image";

import LandingHeader from "components/layout/header/LandingHeader";
import HeroBackground from "components/global/hero/HeroBackground";

export default function Home() {
  return (
    <>
      <HeroBackground isLandingPage="true" />
    </>
  );
}
