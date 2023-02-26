import ParishHeader from "components/global/header/ParishHeader";
import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import styled from "styled-components";

const Parish = () => {
  return (
    <>
      <ParishHero />
      <MenuCards />
      <News />
    </>
  );
};

export default Parish;
