import styled from "styled-components";
import { AuthAsWho } from "constants/auth";
import Modal from "components/global/UI/cards/Modal";
// import { smallText } from "../../style/TextSize";
// import { secondary } from "../../style/Colors";
import Link from "next/link";

const AuthAsWhoModal = (props: {
  authCase: string;
  onCloseModal: () => void;
}) => {
  return (
    <Modal>
      <>
        <ButtonStyle>
          <Link
            href={`${
              props.authCase === "Zaloguj" ? "/login" : "/register"
            }?who=user`}
            onClick={props.onCloseModal}
            // state={AuthAsWho.userNameForBackendEndpoint}
          >
            {props.authCase + " " + AuthAsWho.authAsUser}
          </Link>
        </ButtonStyle>
        {/* login/register as user */}
        <ButtonStyle isColor={true}>
          <Link
            href={`${
              props.authCase === "Zaloguj" ? "/login" : "/register"
            }?who=priest`}
            onClick={props.onCloseModal}
            // state={AuthAsWho.priestNameForBackendEndpoint}
          >
            {props.authCase + " " + AuthAsWho.authAsPriest}
          </Link>
        </ButtonStyle>
        {/* login/register as priest */}
      </>
    </Modal>
  );
};

export default AuthAsWhoModal;

const ButtonStyle = styled.button<{ isColor?: boolean }>`
  width: 15vw;
  height: 20vh;
  margin: 3%;
  background-color: ${(props) =>
    props.isColor ? (props) => props.theme.colors.secondary : "white"};
  border-radius: 20px;
  border-color: black;
  font-size: ${(props) => props.theme.fontSizes.small};
  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
