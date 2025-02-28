import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { handleLogin } from "../secure/handleBackend";
import MiniLoader from "../components/ui/MiniLoader"; // Import MiniLoader component

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const data = await handleLogin(email, password);
    setLoading(false); // Stop loading

    if (data.success) {
      localStorage.setItem("authToken", data.authToken);
      window.location.reload();
      navigate("/dashboard");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            id="email-address"
            label="Email address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <Button type="submit" className="w-full">
              {loading ? (
                <MiniLoader /> // Display the MiniLoader when loading
              ) : (
                "Sign in" // Display "Sign in" text when not loading
              )}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/login/signup"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Back to options
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
