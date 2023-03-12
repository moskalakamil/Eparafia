import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ParishURL = (props: any) => {
  console.log(props);
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
  console.log(ParishURL);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Parish/GetParishByShortName?shortName=${ParishURL}`
  );

  return await res.json();
};

export async function getStaticProps({ params, locale }: any) {
  const parishes = await loadParishes(params.ParishURL);

  return {
    props: {
      parishes,
      ...(await serverSideTranslations(locale, ["common", "parish"])),
    },
  };
}

const loadParishesURL = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Parish/GetAllParishShortNames`
  );

  return await res.json();
};

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const data = await loadParishesURL();

  const parishes = await data.data;

  const paths: any[] = [];

  parishes.map((parish: string | null) => {
    locales.map((locale: string) => {
      return paths.push({
        params: { ParishURL: `${parish}` },
        locale,
      });
    });
  });

  return { paths, fallback: false };
};
