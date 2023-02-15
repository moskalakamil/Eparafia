import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AuthInterface from "../models/authModel";

const ProtectedAuthRoutes = () => {
  const token = localStorage.getItem("jwt");

  return token !== null ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedAuthRoutes;
