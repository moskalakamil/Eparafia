import NewsEditForm from "components/parish/news/editNews";
import NewsEditHeader from "components/parish/news/editNews/NewsEditHeading";
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
