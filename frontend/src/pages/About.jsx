import { useEffect, useState } from "react";

const About = () => {
  // State to track system theme preference
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system theme preference on initial load
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in system theme preference
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-indigo-500 to-blue-600'} py-20 px-6`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className={`text-5xl font-extrabold tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Us
        </h1>
        <p className={`text-lg md:text-xl mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          We are a team of passionate innovators working to revolutionize charitable donations through the power of blockchain technology.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:px-12 lg:px-16 mb-12">
          {/* Mission Section */}
          <div className={`bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Our Mission</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Our mission is to create a transparent, secure, and efficient platform for charitable donations. By harnessing blockchain, we aim to reduce fraud and increase trust between donors and recipients, ensuring that every contribution is used as intended.
            </p>
          </div>

          {/* Blockchain for Good Section */}
          <div className={`bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Blockchain for Good</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Blockchain brings unmatched transparency and accountability to donations. Every donation is tracked and verified on a decentralized network, providing donors with real-time visibility into how their money is used, and ensuring no middleman can alter the process.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 px-6 md:px-16">
          <h2 className={`text-4xl font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className={`text-center bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`text-5xl mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>🔍</div>
              <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Transparency</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Donors should know exactly where their money is going. Blockchain ensures complete transparency in the donation process.
              </p>
            </div>
            <div className={`text-center bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`text-5xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>🔒</div>
              <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Security</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Blockchain’s encryption keeps donations secure, ensuring every transaction is tamper-proof and protected.
              </p>
            </div>
            <div className={`text-center bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`text-5xl mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`}>⚡</div>
              <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Efficiency</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                With blockchain, donations are processed faster, removing unnecessary intermediaries and streamlining the entire process.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`py-12 px-6 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
          <h3 className={`text-3xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>Join Us in Making a Difference</h3>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
            Whether you're a donor eager to support meaningful causes or a nonprofit in need of funding, we invite you to be a part of this transformative journey.
          </p>
          <a
            href="/donate"
            className={`inline-block bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-400 transition-all ${isDarkMode ? 'dark:bg-gradient-to-r dark:from-indigo-700 dark:to-blue-700' : ''}`}
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
