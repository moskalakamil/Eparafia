import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Backdrop = () =>{
    return(
        <BackdropStyle></BackdropStyle>
    )
}

const ModalOverlay = (props: {children: JSX.Element}) => {
  return (
    <ModalStyle>
        {props.children}
    </ModalStyle>
  )
}

const Modal = (props: {children: JSX.Element}) => {
    return (
        <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById('modal') as HTMLElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById('modal') as HTMLElement
        )}
      </React.Fragment>
    )
  }

export default Modal

const BackdropStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`
const ModalStyle = styled.div`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    background-color: #fff;
    border-radius: 20px;
`