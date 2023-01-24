import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TheHeader from '../components/Global/TheHeader/TheHeader'
import LoginPage from '../components/LoginPage/LoginPage'


const LoginUser = (props: any) => {
  const [whoIsLogin, setWhoIsLogin] = useState('')    //from where taking data in fetch

  const location = useLocation()

    useEffect(() => {
      if(!props.state.AuthAsWho) setWhoIsLogin(location.state.AuthAsWho)
      setWhoIsLogin(props.state.AuthAsWho)
    }, [location])
  return (
    <>
        <TheHeader />
        <LoginPage whoIsLogin={whoIsLogin}/>
    </>
  )
}

export default LoginUser