import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Welcome to DonationDApp
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Please choose an option to continue
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <Link to="/login/signin">
              <Button className="w-full mb-4">
                Sign In
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/login/signup">
              <Button className="w-full" variant="outline">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

