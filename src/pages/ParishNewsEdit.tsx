import { useParams } from "react-router-dom";
import styled from "styled-components";
import ParishHeader from "../components/Global/TheHeader/ParishHeader";
import ButtonDetails from "../components/Global/UI/ButtonDetails";
import ParishNewsEditForm from "../components/Parish/ParishNews/ParishNewsEdit/ParishNewsEditForm";
import ParishNewsEditHeader from "../components/Parish/ParishNews/ParishNewsEdit/ParishNewsEditHeader";
import { ParishEditingNews } from "../constants/parish";
import { bigText, normalText, smallText } from "../style/TextSize";

const ParishNewsEdit = () => {
  const { id } = useParams();

  return (
    <>
      <ParishHeader />
      <ContainerStyle>
        <ParishNewsEditHeader />
        <ParishNewsEditForm />
        {/* <p>{id}</p> */}
      </ContainerStyle>
    </>
  );
};

export default ParishNewsEdit;

const ContainerStyle = styled.div`
  max-width: 1920px;
  margin: 140px auto 0 auto;
`;
