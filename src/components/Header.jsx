import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Header = ({
  navLinks,
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
  currentPageIndex,
  setCurrentPageIndex,
}) => {
  // Animation variants
  const menuVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  // Menu styling stuff
  const hamburgerLineStyle = `w-6 h-1 bg-black rounded-sm transition ease transform duration-300`;

  return (
    <>
      {/* Mobile Menu */}
      <div className='md:hidden flex justify-between items-center shadow-md h-24 px-4 w-full bg-white'>
        {/* Logo */}
        <Logo />
        {/* Mobile Menu Toggle Button */}
        <button
          className='flex flex-col w-6 h-5 justify-between cursor-pointer group z-20'
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <div
            className={`${hamburgerLineStyle} ${
              mobileMenuIsOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div
            className={`${hamburgerLineStyle}  ${
              mobileMenuIsOpen
                ? "opacity-0"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div
            className={`${hamburgerLineStyle} ${
              mobileMenuIsOpen
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
        </button>
        {/* Drawer Menu */}
        <AnimatePresence>
          {mobileMenuIsOpen && (
            <motion.div
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed h-screen top-0 right-0 w-72 bg-gray-100 shadow-md flex flex-col justify-center items-center z-10'
            >
              <ul className='font-bold text-2xl flex flex-col gap-3'>
                {navLinks}
                <li className=''>
                  <button className='py-2 px-4 rounded-md bg-blue-500 text-white shadow-md'>
                    <a
                      href='Connor_Wilson-Groark_Resume_2023.pdf'
                      target='_blank'
                    >
                      Resume
                    </a>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex w-full h-24 shadow-md justify-center bg-white'>
        {/* Content Container */}
        <div className='flex w-full max-w-7xl justify-between items-center px-4'>
          <Logo />
          <nav className=''>
            <ul className='flex items-center '>
              {navLinks}
              <li className=''>
                {" "}
                <button className=''>
                  <a
                    className='py-2 px-4 mx-2 rounded-md bg-blue-500 text-white shadow-md font-bold duration-200 hover:bg-blue-400'
                    href='Connor_Wilson-Groark_Resume_2023.pdf'
                    target='_blank'
                  >
                    Resume
                  </a>
                </button>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
