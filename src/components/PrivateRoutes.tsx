import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Header from "./header/Header";
// import { account } from "../appwriteConfig";

function PrivateRoutes() {
  const { user } = useAuth();

  return user ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoutes;
