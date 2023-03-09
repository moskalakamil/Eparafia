import HeroBackground from "components/global/hero/HeroBackground";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <HeroBackground isLandingPage="true" />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
