import CreateParish from "components/parish/createParish";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CreateParishPage = () => {
  return <CreateParish />;
};

export default CreateParishPage;

export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "parish"])),
  },
});
