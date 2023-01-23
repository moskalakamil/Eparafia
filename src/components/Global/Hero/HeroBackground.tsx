import React from 'react'
import styled from 'styled-components'

const TheBackground = (props: {children: JSX.Element}) => {
  return (
    <BackgroundImageStyle>
      {props.children}
    </BackgroundImageStyle>
  )
}

export default TheBackground

const BackgroundImageStyle = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 2000px;
    position: relative;
    top: 0;
    background-image: url('/images/Landing/background.png');
    background-repeat: no-repeat, repeat;
    background-size: 100%;

    &{

    }
`