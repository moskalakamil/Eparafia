import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/index"
import LoginUser from "./pages/LoginUser"
import LoginPriest from "./pages/LoginPriest"
import SigninUser from './pages/SigninUser';
import SigninPriest from './pages/SigninPriest';

const App = () => {

  return (
    <Routes>
      {/* public */}
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/login-priest' element={<LoginPriest/>}/>
      <Route path='/register' element={<SigninUser/>}/>
      <Route path='/register-priest' element={<SigninPriest/>}/>

      {/* private */}
    </Routes>
  )
}

export default App
