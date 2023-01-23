import React, { useEffect, useState } from 'react'
import { LandingNavLinkData, LandingNavLinkButton, AuthAsWho  } from '../../../constants/navbar'

import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { NavLinksStyle, NavButtonLinksStyle } from '../../../style/TextStyles'
import Modal from '../Cards/Modals'

const TheHeader = () => {
  const [authAction, setAuthAction] = useState('')
  const [userLink, setUserLink] = useState('')
  const [priestLink, setPriestLink] = useState('')
  
  const setStates = (text: string, linkUser: string, linkPriest: string) =>{
    setAuthAction(text)
    setUserLink(linkUser)
    setPriestLink(linkPriest)
  }

  const closeModal = () =>{
    setAuthAction('')
  }
  return (
    <HeaderStyle>
      <Link to='/'>
        <img src='/images//Global/logo.png' />
      </Link>
      <div>
        <ul>
          {LandingNavLinkData.map(data =>(
            <NavLinksStyle key={data.id}>{data.text}</NavLinksStyle>
          ))}
        </ul>
        {LandingNavLinkButton.map((data) => (
            <NavButtonLinksStyle onClick={() => setStates(data.text, data.linkUser, data.linkPriest)} key={data.id} color={data.color}>
              {data.text}
            </NavButtonLinksStyle>
        ))}
        {authAction.length && (
          <Modal>
            <>
            <Link to={userLink} onClick={closeModal}>
                <button>{authAction} {AuthAsWho.authAsUser}</button>
            </Link>
            <Link to={priestLink} onClick={closeModal}>
                <button>{authAction} {AuthAsWho.authAsPriest}</button>
              </Link>
            </>
          </Modal>
        )}
      </div>
    </HeaderStyle>
  )
}

export default TheHeader

const HeaderStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 140px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: rgba(53,53,53,.3);
  z-index: 5;

  &>div{
    display: flex;
    align-items: center;
    
    ul{
      list-style: none;
      display: flex;
      
    
      & li{
        margin: 0 40px;
      }
    }
    
    button{
      padding: 15px;
      margin: 0 20px;
      border: none;
      border-radius: 20px;
    }
  }
`