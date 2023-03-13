import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ParishURL = (props: any) => {
  return (
    <>
      <ParishHero callname="asd" />
      <News />
      <MenuCards />
    </>
  );
};

export default ParishURL;

export const loadParishes = async (ParishURL: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Parish/GetParishByShortName?shortName=${ParishURL}`
  );

  return await res.json();
};

export const getStaticProps: GetStaticProps = async ({
  locale,
  parishURL,
}: any) => {
  const parishes = await loadParishes();

  return {
    props: {
      // parishes,
      ...(await serverSideTranslations(locale, ["common", "parish"])),
    },
  };
}

const loadParishesPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Parish/GetAllParishShortNames`
  );

  return await res.json();
};

export const getStaticPaths: GetStaticPaths = async ({ locale }: any) => {
  // const res = await fetch("");
  // const parishes = await res.json();

  // const paths = parishes.map((parish) => ({
  //   params: { ParishURL: parish.url },
  // }));
  console.log(locale);
  const paths = [
    { params: { ParishURL: "a" } },
    { params: { ParishURL: "b" } },
    { params: { ParishURL: "c" } },
  ];

  return { paths, fallback: true };
};
