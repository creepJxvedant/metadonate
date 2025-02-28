import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IsLoggedIn, HandleLogout } from '../secure/IsLoggedIn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(IsLoggedIn());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    HandleLogout();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(IsLoggedIn());
    };

    window.addEventListener("loginStatusChange", checkLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChange", checkLoginStatus);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
            MetaDonate
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to={isLoggedIn ? "/dashboard" : "/"}>{isLoggedIn ? "Dashboard" : "Home"}</NavLink>

            {isLoggedIn && (
              <>
                <NavLink to="/dashboard/donate">Donate</NavLink>
                <NavLink to="/dashboard/past-donations">Past Donations</NavLink>
              </>
            )}
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 transition-colors duration-300">
          <nav className="flex flex-col space-y-4 px-4">
            <NavLink to={isLoggedIn ? "/dashboard" : "/"} onClick={toggleMenu}>
              {isLoggedIn ? "Dashboard" : "Home"}
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink to="/donate" onClick={toggleMenu}>Donate</NavLink>
                <NavLink to="/past-donations" onClick={toggleMenu}>Past Donations</NavLink>
              </>
            )}
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/faq" onClick={toggleMenu}>FAQ</NavLink>
            <Link
              to={isLoggedIn ? "#" : "/login"}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={isLoggedIn ? handleLogout : null}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
    {...props}
  >
    {children}
  </Link>
);

export default Header;
