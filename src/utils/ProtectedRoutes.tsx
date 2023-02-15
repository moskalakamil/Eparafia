import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AuthInterface from "../models/authModel";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("jwt");

  return token !== null ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
