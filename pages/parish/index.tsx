import AuthBackground from "components/auth/Background";
import LandingHeader from "components/global/header/LandingHeader";
import ButtonDetails from "components/global/UI/ButtonDetails";
import TextDetails from "components/global/UI/TextDetails";
import { createOrJoinParish } from "constants/parish";
import Link from "next/link";
import styled from "styled-components";

const Priest = () => {
  return (
    <>
      <AuthBackground>
        <ContainerStyle>
          <div>
            <TextDetails
              text={createOrJoinParish.text}
              size="large"
              weight="large"
              underline={true}
            />
            <TextDetails text={createOrJoinParish.description} size="medium" />
          </div>
          <div>
            <Link href="/parish/create-parish">
              <ButtonDetails
                text={createOrJoinParish.buttonText}
                color="secondary"
              ></ButtonDetails>
            </Link>
          </div>
        </ContainerStyle>
      </AuthBackground>
    </>
  );
};

export default Priest;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    margin: 30px 30px 100px 30px;
  }
  button {
    border: 1px solid black;
    border-radius: 10px;
    padding: 25px;
    margin: 10px;
    font-size: 40px;
    width: 100%;
    cursor: pointer;
  }
`;
