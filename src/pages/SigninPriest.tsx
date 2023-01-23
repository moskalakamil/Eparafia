import TheHeader from '../components/Global/TheHeader/TheHeader'
import HeroBackground from '../components/Global/Hero/HeroBackground'
import LoginCard from '../components/Global/Cards/LoginCard'

const SigninPriest = () => {
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
                        priest
                    </form>
                </LoginCard>
            
            </div>
        </HeroBackground>
    </>
  )
}

export default SigninPriest