import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import LandingPage from "./pages/Index";
import SignUp from "./pages/SignUp";
import CreateParish from "./pages/CreateParish";

import { AuthAsWho } from "./constants/auth";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import ProtectedAuthRoutes from "./utils/ProtectedAuthRoutes";
import Priest from "./pages/Priest";
import Parish from "./pages/Parish";
import LogIn from "./pages/LogIn";
import index as LandingPage from "./pages/index";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />} />
        {/* <Route element={<ProtectedAuthRoutes />}> */}
        <Route
          path="/login"
          element={<LogIn state={AuthAsWho.userNameForBackendEndpoint} />}
        />
        <Route
          path="/login-priest"
          element={<LogIn state={AuthAsWho.priestNameForBackendEndpoint} />}
        />
        <Route
          path="/register"
          element={<SignUp state={AuthAsWho.userNameForBackendEndpoint} />}
        />
        <Route
          path="/register-priest"
          element={<SignUp state={AuthAsWho.priestNameForBackendEndpoint} />}
        />
        {/* </Route> */}
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/priest" element={<Priest />} />
        <Route path="/priest/create-parish" element={<CreateParish />} />
        <Route path="/priest/parish" element={<Parish />} />
        {/* </Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
