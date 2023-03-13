import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ParishURL = ({ parishes }: any) => {
  const { data } = parishes;
  console.log(parishes);
  return (
    <>
      <ParishHero callname={data.callName} />
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
  params,
  locale,
}: any) => {
  const parishes = await loadParishes(params.ParishURL);

  return {
    props: {
      parishes,
      ...(await serverSideTranslations(locale, ["common", "parish"])),
    },
    revalidate: 1,
  };
};

const loadParishesPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Parish/GetAllParishShortNames`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const data = await loadParishesPaths();

  const parishes: string[] = await data.data;

  const paths: any[] = [];

  parishes.map((parish) => {
    locales.map((locale: string) => {
      return paths.push({
        params: { ParishURL: `${parish}` },
        locale,
      });
    });
  });

  return { paths, fallback: false };
};
