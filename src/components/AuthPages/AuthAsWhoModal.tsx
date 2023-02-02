import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthAsWho } from "../../constants/auth";
import Modal from "../Global/UI/Cards/Modals";
import { smallText } from "../../style/TextSize";
import { secondary } from "../../style/Colors";

const AuthAsWhoModal = (props: {
  authCase: string;
  onCloseModal: () => void;
}) => {
  return (
    <>
      {props.authCase !== "" && (
        <Modal>
          <>
            <ButtonStyle color="white">
              <Link
                to={props.authCase === "Zaloguj" ? "/login" : "/register"}
                onClick={props.onCloseModal}
                state={AuthAsWho.userNameForBackendEndpoint}
              >
                {props.authCase + " " + AuthAsWho.authAsUser}
              </Link>
            </ButtonStyle>
            {/* login/register as user */}
            <ButtonStyle color={secondary}>
              <Link
                to={
                  props.authCase === "Zaloguj"
                    ? "/login-priest"
                    : "/register-priest"
                }
                onClick={props.onCloseModal}
                state={AuthAsWho.priestNameForBackendEndpoint}
              >
                {props.authCase + " " + AuthAsWho.authAsPriest}
              </Link>
            </ButtonStyle>
            {/* login/register as priest */}
          </>
        </Modal>
      )}
    </>
  );
};

export default AuthAsWhoModal;

const ButtonStyle = styled.button`
  width: 15vw;
  height: 20vh;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  border-color: black;
  font-size: ${smallText.size};
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
