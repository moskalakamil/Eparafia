import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/index";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import CreateParish from "./pages/CreateParish";

import { AuthAsWho, AuthLinks } from "./constants/auth";
import { LandingNavLinkButton } from "./constants/navbar";

const App = () => {
  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<LandingPage />} />
      <Route
        path={AuthLinks[0].linkUser}
        element={
          <LogIn state={{ AuthAsWho: AuthAsWho.userNameForBackendEndpoint }} />
        }
      />
      <Route
        path={AuthLinks[0].linkPriest}
        element={
          <LogIn
            state={{ AuthAsWho: AuthAsWho.priestNameForBackendEndpoint }}
          />
        }
      />
      <Route
        path={AuthLinks[1].linkUser}
        element={
          <SignUp state={{ AuthAsWho: AuthAsWho.userNameForBackendEndpoint }} />
        }
      />
      <Route
        path={AuthLinks[1].linkPriest}
        element={
          <SignUp
            state={{ AuthAsWho: AuthAsWho.priestNameForBackendEndpoint }}
          />
        }
      />

      {/* private */}
      <Route path="/create-parish" element={<CreateParish />} />
    </Routes>
  );
};

export default App;
