import {Navigate } from 'react-router-dom';

// ProtectedRoute will now only render the Route inside of a Routes component
const ProtectedRoute = ({element}) => {
  const isLoggedIn = localStorage.getItem('authToken'); // Check if the user is logged in
  
  if (!isLoggedIn) {
    return <Navigate to="/login/signin" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
