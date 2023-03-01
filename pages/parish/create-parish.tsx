import LandingHeader from "components/layout/header/LandingHeader";
import TextDetails from "components/global/UI/TextDetails";
import CreateFirstStep from "components/parish/createParish/CreateFirstStep";
import CreateParishPagination from "components/parish/createParish/CreateParishPagination";
import { createParish } from "constants/parish";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Spinner from "components/global/loading/Spinner";
import CreateParish from "components/parish/createParish";

const CreateParishPage = () => {
  return <CreateParish />;
};

export default CreateParishPage;
