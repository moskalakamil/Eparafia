import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AuthInterface from "../models/authModel";

const ProtectedAuthRoutes = () => {
  const token = useSelector((state: AuthInterface) => state.auth.token);

  return token !== "" ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedAuthRoutes;
