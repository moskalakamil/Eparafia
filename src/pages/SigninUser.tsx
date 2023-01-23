import React from 'react'
import TheHeader from '../components/Global/TheHeader/TheHeader'
import HeroBackground from '../components/Global/Hero/HeroBackground'
import LoginCard from '../components/Global/Cards/LoginCard'

const SigninUser = () => {
  return (
    <>
    <TheHeader />
        <HeroBackground>
        <div>
                <LoginCard>
                    <form>
                        <input type='email' required/>
                        <input type='password' required/>
                        <button type='submit'>Zaloguj</button>
                        userr
                    </form>
                </LoginCard>
            </div>
        </HeroBackground>
    </>
  )
}

export default SigninUser