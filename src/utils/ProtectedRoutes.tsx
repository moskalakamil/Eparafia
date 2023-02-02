import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AuthInterface from "../models/authModel";

const ProtectedRoutes = () => {
  const token = useSelector((state: AuthInterface) => state.auth.token);

  return token !== "" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
