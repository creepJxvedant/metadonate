import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("authToken"); // Check if the user is logged in

  if (!isLoggedIn) {
    return <Navigate to="/login/signin" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
