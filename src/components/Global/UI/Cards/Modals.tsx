import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = (props: { children: JSX.Element }) => {
  return (
    <>
      <BackdropStyle></BackdropStyle>
      <ModalStyle>{props.children}</ModalStyle>
    </>
  );
};

const Modal = (props: { children: JSX.Element }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default Modal;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const ModalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 12%;
  position: fixed;
  top: 30vh;
  left: 15%;
  width: 70%;
  z-index: 100;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
`;
