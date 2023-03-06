import LogInForm from "components/auth/LogInForm";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login = (props: any) => {
  const { query, push } = useRouter();

  return (
    <>
      <LogInForm whoIsLogin={query.who || "user"} />
    </>
  );
};
export default Login;

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["login", "common"])),
  },
});
