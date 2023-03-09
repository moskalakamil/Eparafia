import NewsEditForm from "components/parish/news/editNews";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ParishNewsEdit = () => {
  return (
    <>
      <NewsEditHeader />
      <NewsEditForm />
    </>
  );
};

export default ParishNewsEdit;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "parish"])),
  },
});
