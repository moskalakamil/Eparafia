import { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  LandingNavLinkData,
  LandingNavLinkButton,
  LogoData,
} from "../../../constants/navbar";
import { AuthAsWho, AuthLinks } from "../../../constants/auth";

import Modal from "../UI/Cards/Modals";
import { normalText } from "../../../style/TextSize";

const TheHeader = () => {
  const [authAction, setAuthAction] = useState("");
  const [index, setIndex] = useState(0);

  const closeModal = () => {
    setAuthAction("");
  };

  const correctLink = (text: string) => {
    setAuthAction(text);
    if (text === LandingNavLinkButton[0].text) setIndex(0);
    else if (text === LandingNavLinkButton[1].text) setIndex(1);
  };

  return (
    <HeaderStyle>
      <Link to={LogoData.link}>
        <img src={LogoData.source} />
      </Link>
      <div>
        <ul>
          {LandingNavLinkData.map((data) => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
        {LandingNavLinkButton.map((data) => (
          <ButtonStyle
            onClick={() => correctLink(data.text)}
            key={data.id}
            color={data.color}
          >
            {data.text}
          </ButtonStyle>
        ))}
        {authAction.length > 0 && (
          <Modal>
            <>
              <Link
                to={AuthLinks[index].linkUser}
                onClick={closeModal}
                state={{ AuthAsWho: AuthAsWho.userNameForBackendEndpoint }}
              >
                <button>
                  {authAction} {AuthAsWho.authAsUser}
                </button>
                {/* login/register as user */}
              </Link>
              <Link
                to={AuthLinks[index].linkPriest}
                onClick={closeModal}
                state={{ AuthAsWho: AuthAsWho.priestNameForBackendEndpoint }}
              >
                <button>
                  {authAction} {AuthAsWho.authAsPriest}
                </button>
                {/* login/register as priest */}
              </Link>
            </>
          </Modal>
        )}
      </div>
    </HeaderStyle>
  );
};

export default TheHeader;

const HeaderStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 140px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: rgba(53, 53, 53, 0.3);
  z-index: 5;

  & > div {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;

      & li {
        margin: 0 25px;
        font-size: ${normalText.size};
        color: white;
      }
    }
  }
`;
const ButtonStyle = styled.button`
  padding: 15px;
  margin: 0 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.color};

  // export const NavButtonLinksStyle = styled.button
`;
// font-size: 25px;
// color: white;
// font-weight: 600;
// background-color: ${(props) => props.color} ;
// `
// export const LabelStyle = styled.label`
// margin: 0;
// font-size: 25px;
// `
