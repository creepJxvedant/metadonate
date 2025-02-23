import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../secure/ProtectedRoute";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Donate = lazy(() => import("../pages/Donate"));
const PastDonations = lazy(() =>
  import("../components/Donation/PastDonations")
);
const FAQ = lazy(() => import("../pages/FAQ"));
const Contact = lazy(() => import("../pages/Contact"));
const RequestDonation = lazy(() => import("../pages/RequestDonation"));
const Login = lazy(() => import("../pages/Login"));
const Signin = lazy(() => import("../pages/SignIn"));
const Signup = lazy(() => import("../pages/SignUp"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

function RoutesElement() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signin" element={<Signin />} />
      <Route path="/login/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route
        path="/dashboard/donate"
        element={<ProtectedRoute element={<Donate />} />}
      />
      <Route
        path="/dashboard/requestdonation"
        element={<ProtectedRoute element={<RequestDonation />} />}
      />
      <Route
        path="/dashboard/past-donations"
        element={<ProtectedRoute element={<PastDonations />} />}
      />

      {/* Catch-All Route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RoutesElement;
