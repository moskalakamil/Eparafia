import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { LoginData } from '../../constants/auth'
import { Link } from 'react-router-dom'
import { BigTextStyle, LabelStyle } from '../../style/TextStyles'

import LoadingSpinner from '../Global/Loading/LoadingSpinner'
import HeroBackground from '../Global/Hero/HeroBackground'
import LoginCard from '../Global/Cards/LoginCard'

import styled from 'styled-components'

const LoginPage = (props: {whoIsLogin: string}) => {
    const [enteredMail, setEnteredMail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const emailInput = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        setEnteredMail(event.target.value)
    }
    const passwordInput = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        setEnteredPassword(event.target.value)
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        
        try{
            setIsLoading(true)
            setError('')
            
            const res = await fetch(`http://91.227.2.183:83/${props.whoIsLogin}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({
                    email: enteredMail,
                    password: enteredPassword,
              }),
            })
            const data = await res.json()
            console.log(data)
            if(!res.ok){
                let errorMessage = data.Errors.Message[0]
                if (errorMessage === 'User not found') errorMessage = 'Nie znaleziono użytkownika'
                else if (errorMessage === 'Bad password') errorMessage = 'Błędne hasło, spróbuj ponownie'
                else errorMessage = 'Coś poszło nie tak, spróbuj ponownie'
                
                throw new Error(errorMessage)
            }
            // console.log(data.data.jwt)
            } catch(err: any){
                console.log(err)
                setError(err.message)
            }
            setIsLoading(false)
    }   
  return (

    <HeroBackground>
                <LoginCard>                   
                    {isLoading ? <LoadingSpinner /> :
                        <>
                            <BigTextStyle>{LoginData[0].text}</BigTextStyle>
                            <FormStyle onSubmit={submitHandler}>
                                <LabelStyle htmlFor={LoginData[1].type}>{LoginData[1].text}</LabelStyle>
                                <input onInput={emailInput} id={LoginData[1].type} type={LoginData[1].type} required placeholder={LoginData[1].placeholder}/>
                                <LabelStyle htmlFor={LoginData[2].type}>{LoginData[2].text}</LabelStyle>
                                <input onInput={passwordInput} id={LoginData[2].type} type={LoginData[2].type} required placeholder={LoginData[2].placeholder}/>
                                <p>{LoginData[3].text}</p>
                                <button type='submit'>{LoginData[4].text}</button>
                            </FormStyle>
                                <p>{LoginData[5].text}<Link to={LoginData[5].link}>{LoginData[5].span}</Link></p>
                                {error.length !== 0 &&
                                <>
                                    <ErrorStyle>{error}</ErrorStyle>
                                </>
                                }
                        </>
                    }
                </LoginCard>
    </HeroBackground>
  )
}

export default LoginPage

const FormStyle = styled.form`
display: flex;
flex-direction: column;
    & input{
        background-color: #F0F0F0;
        border-radius: 10px;
        border: none;
        border-bottom: 1px solid #858585;
        outline: none;
        padding: 15px;
        margin: 10px 0;
    }
    & label{
        margin: 10px 0
    }
`
const ErrorStyle = styled.p`
color: red;
`