import styled from "styled-components";
import Modal from "components/global/UI/cards/Modal";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const AuthAsWhoModal = (props: {
  authAction: string;
  closeModal: () => void;
}) => {
  const { t } = useTranslation("common");
  return (
    <Modal>
      <>
        <ButtonStyle>
          <Link
            onClick={props.closeModal}
            href={"/" + props.authAction + "?who=parishioner"}
          >
            {props.authAction === "register"
              ? t("nav-modal -> signup as parishioner")
              : t("nav-modal -> signin as parishioner")}
          </Link>
        </ButtonStyle>
        {/* login/register as user */}

        <ButtonStyle isColor={true}>
          <Link
            onClick={props.closeModal}
            href={"/" + props.authAction + "?who=priest"}
          >
            {props.authAction === "login"
              ? t("nav-modal -> signin as priest")
              : t("nav-modal -> signup as priest")}
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
