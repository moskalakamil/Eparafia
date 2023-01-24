import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/index"
import Login from "./pages/Login"
import Signin from './pages/Signin';
import CreateParish from './pages/CreateParish';

import { AuthAsWho } from './constants/auth';
const App = () => {

  return (
    <Routes>
      {/* public */}
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login state={{AuthAsWho: AuthAsWho.userNameForBackendEndpoint}} />} />
      <Route path='/login-priest' element={<Login state={{AuthAsWho: AuthAsWho.priestNameForBackendEndpoint}}/>}/>
      <Route path='/register' element={<Signin/>}/>
      <Route path='/register-priest' element={<Signin/>}/>

      {/* private */}
      <Route path='/create-parish' element={<CreateParish />} />

    </Routes>
  )
}

export default App
