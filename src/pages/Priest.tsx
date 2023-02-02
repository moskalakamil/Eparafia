import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthBackground from "../components/AuthPages/AuthBackground";
import TheHeader from "../components/Global/TheHeader/TheHeader";
import ButtonDetails from "../components/Global/UI/ButtonDetails";
import TextDetails from "../components/Global/UI/TextDetails/TextDetails";
import { createOrJoinParish } from "../constants/Parish";
import { secondary } from "../style/Colors";
import { bigText, normalText } from "../style/TextSize";

const Priest = () => {
  return (
    <>
      <TheHeader />
      <AuthBackground>
        <ContainerStyle>
          <div>
            <TextDetails
              text={createOrJoinParish.text}
              size={bigText.size}
              weight={bigText.weight}
              underline={true}
            />
            <TextDetails
              text={createOrJoinParish.description}
              size={normalText.size}
            />
          </div>
          <div>
            <Link to="/priest/create-parish">
              <ButtonDetails
                text={createOrJoinParish.buttonText}
                color={secondary}
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
