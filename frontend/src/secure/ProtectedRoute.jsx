import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("authToken"); // Check if the user is logged in
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login/signin" replace state={{ from: location }} />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
