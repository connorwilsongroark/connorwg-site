import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  // For router
  const location = useLocation();
  // Links data
  const navData = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Projects", path: "/projects" },
    {
      id: 2,
      name: "Experience",
      path: "/experience",
    },
    { id: 3, name: "Contact", path: "/contact" },
  ];
  // State
  // Mobile menu is open?
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  // Current page index
  const [currentPageIndex, setCurrentPageIndex] = useState();

  // Nav Click Handler
  const handleNavClick = (navItem) => {
    if (mobileMenuIsOpen) {
      setMobileMenuIsOpen(false);
    }
    // Check which direction to exit & enter from
    // if (currentPageIndex < navItem.id) {
    //   console.log(`exit to left, enter from right`);
    // } else if (currentPageIndex > navItem.id) {
    //   console.log(`exit to right, enter from left`);
    // } else {
    //   console.log(`neither`);
    // }
  };

  // Array of nav Links
  const navLinks = navData.map((navItem) => (
    <li key={navItem.id} className='group md:mx-4'>
      <Link to={navItem.path} onClick={() => handleNavClick(navItem)}>
        {navItem.name}
      </Link>
      {/* Underline */}
      <div
        className={`duration-200 ${
          currentPageIndex === navItem.id
            ? `w-8 h-0.5 bg-black opacity-80 rounded-full`
            : `w-0.5 opacity-0 h-0.5 bg-black rounded-full group-hover:w-8 group-hover:h-0.5 group-hover:bg-black group-hover:opacity-30 hover:rounded-full`
        } `}
      ></div>
    </li>
  ));

  return (
    // full site
    <div className='font-poppins bg-gray-50 min-h-screen flex flex-col justify-between'>
      {/* actual site content */}

      <Header
        navLinks={navLinks}
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <main className=''>
        <AnimatePresence initial={false} mode='wait'>
          <Routes location={location} key={location.key}>
            <Route
              path='/'
              element={
                <Home
                  routeId={navData[0].id}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              }
            />
            <Route
              path='/projects'
              element={
                <Projects
                  routeId={navData[1].id}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              }
            />
            <Route
              path='/experience'
              element={
                <Experience
                  routeId={navData[2].id}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              }
            />
            <Route
              path='/contact'
              element={
                <Contact
                  routeId={navData[3].id}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
