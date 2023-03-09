import RegisterForm from "components/auth/RegisterForm";
import LandingHeader from "components/layout/header/LandingHeader";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Register = () => {
  const { query, push } = useRouter();

  return (
    <>
      <RegisterForm whoIsLogin={query.who || "user"} />
    </>
  );
};

export default Register;

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "auth"])),
  },
});
