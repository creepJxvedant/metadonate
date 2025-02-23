import { lazy, useState, useEffect } from "react";
import Loader from "./components/Loader";

const RoutesElement = lazy(() => import("../src/Routes/RoutesElement"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ThemeToggle = lazy(() => import("./components/ThemeToggle"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      import("./components/Header"),
      import("./components/Footer"),
      import("../src/Routes/RoutesElement"),
    ]).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <RoutesElement></RoutesElement>
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-10">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
