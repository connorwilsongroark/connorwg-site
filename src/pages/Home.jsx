import Page from "../components/Page";
import { useEffect } from "react";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

const Home = ({ routeId, setCurrentPageIndex }) => {
  // Update current page on render
  useEffect(() => {
    setCurrentPageIndex(routeId);
  }, []);
  // Framer motion page container variants
  const pageContainerVariants = {
    hiddenOnRight: {
      x: "100vw",
    },
    hiddenOnLeft: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
    exitToRight: {
      x: "100vw",
    },
    exitToLeft: {
      x: "-100vw",
    },
  };

  return (
    <Page>
      <div>
        <p className='text-lg md:text-xl'>Hi there, I'm</p>
        <h2 className='text-5xl font-bold my-2 md:text-6xl'>Connor.</h2>
        <p className='my-2 text-2xl font-semibold md:text-3xl'>
          I craft user experiences with ReactJS.
        </p>
        <p className='max-w-2xl md:text-xl'>
          I'm a front-end developer specialized in building pixel-perfect web
          applications.
        </p>
        {/* CTA container */}
        <div className='flex flex-col gap-2 mt-3 md:flex-row'>
          <Link to='/contact'>
            <ButtonPrimary>
              <span>Get In Touch</span>
            </ButtonPrimary>
          </Link>
          <Link to='/projects'>
            <ButtonSecondary>
              <span>Check out my projects</span>
              <span className='pl-10 pr-2 group-hover:pl-12 group-hover:pr-0 duration-200'>
                <BsArrowRight className='' />
              </span>
              {/* <span className='font-bold text-blue-500 group-hover:text-blue-400 duration-200'>
                  Check out my projects
                </span>
                <span className='mr-4 group-hover:mr-0 group-hover:text-blue-400 duration-200 text-xl'>
                  <BsArrowRight className='text-blue-500' />
                </span> */}
            </ButtonSecondary>
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Home;
