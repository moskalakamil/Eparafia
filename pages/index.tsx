import Head from "next/head";
// import Image from "next/image";

import LandingHeader from "components/global/header/LandingHeader";
import HeroBackground from "components/global/hero/HeroBackground";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <HeroBackground isLandingPage={true} />
    </>
  );
}