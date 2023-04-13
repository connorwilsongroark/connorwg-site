import Page from "../components/Page";
import { useEffect } from "react";

import ProjectCard from "../components/ProjectCard";

const Projects = ({ routeId, setCurrentPageIndex, exitToLeft }) => {
  // Update current page on render
  useEffect(() => {
    setCurrentPageIndex(routeId);
  }, []);

  // TODO: fix bug with display block

  return (
    <Page>
      <div className=''>
        <h2 className='text-5xl font-bold my-2 md:text-6xl'>My Projects</h2>
        <p className='my-2 text-2xl font-semibold md:text-3xl '>
          Check out what I've built.
        </p>
        {/* Projects section */}

        <section className='my-4'>
          {/* First project */}
          <div className='relative flex flex-col justify-center  '>
            {/* Image */}
            <img
              src='byb.jpg'
              alt=''
              className='hidden rounded-md shadow-md md:w-[500px] md:block'
            />
            {/* Text content */}
            <ProjectCard side='right'>
              <img
                src='byb.jpg'
                alt=''
                className='rounded-md md:w-[500px] md:hidden'
              />
              {/* Text content */}
              <div className='p-5'>
                <h3 className='text-xl font-bold '>Florida's Backyard Birds</h3>
                <hr className='my-2' />
                <p>
                  A web application for identifying and learning about birds in
                  Florida.
                </p>
                <p>
                  Users can filter birds by name, color, and shape to find and
                  learn about common local varieties, as well as listen to their
                  unique calls and explore a gallery of photos.
                </p>
                <a
                  href='https://connorwilsongroark.github.io/flbackyardbirds/'
                  target='_blank'
                >
                  {/* <button className='py-2 px-10 rounded-md font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 mt-3'>
                    Visit Website
                  </button> */}
                  <button className='w-full py-4 font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 mt-4 rounded-md md:max-w-xs md:py-2 '>
                    Visit Website
                  </button>
                </a>
              </div>
            </ProjectCard>
          </div>
          {/* Project 2 */}
          <div className='relative flex flex-col justify-center items-end mt-5'>
            {/* Image */}
            <img
              src='genesis.jpg'
              alt=''
              className='hidden rounded-md shadow-md md:w-[500px] md:block'
            />
            {/* Text content */}
            <ProjectCard side='left'>
              <img
                src='genesis.jpg'
                alt=''
                className='rounded-md md:w-[500px] md:hidden'
              />
              {/* Text content */}
              <div className='p-5'>
                <h3 className='text-xl font-bold '>
                  Genesis - The Early Years
                </h3>
                <hr className='my-2' />
                <p>
                  Browse through the early albums of the English rock band
                  Genesis.
                </p>
                <p>
                  Users can explore Genesis' early prog-rock years, read
                  snippets about each album, and listen to high quality samples
                  of their greatest songs.
                </p>
                <a
                  href='https://connorwilsongroark.github.io/genesis-framer/'
                  target='_blank'
                >
                  <button className='w-full py-4 font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 mt-4 rounded-md md:max-w-xs md:py-2 '>
                    Visit Website
                  </button>
                </a>
              </div>
            </ProjectCard>
          </div>

          {/* Third project */}
          <div className='relative flex flex-col justify-center  mt-5'>
            {/* Image */}
            <img
              src='zemg.jpg'
              alt=''
              // md:block is causing some kind of bug, shifting content
              className='hidden rounded-md shadow-md  md:w-[500px] md:block'
            />
            {/* Text content */}
            <ProjectCard side='right'>
              <img
                src='zemg.jpg'
                alt=''
                className='rounded-md md:w-[500px] md:hidden'
              />
              {/* Text content */}
              <div className='p-5'>
                <h3 className='text-xl font-bold '>
                  Zero-effort Meme Generator
                </h3>
                <hr className='my-2' />
                <p>An easy-to-use meme creation tool.</p>
                <p>
                  Upload an image from your device or from a chosen URL to begin
                  editing your meme's text.
                </p>
                <p>
                  Customize your meme with dark mode functionality and
                  text-align options - all in your browser.
                </p>
                <a
                  href='https://connorwilsongroark.github.io/zemg/'
                  target='_blank'
                >
                  <button className='w-full py-4 font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 mt-4 rounded-md md:max-w-xs md:py-2 '>
                    Visit Website
                  </button>
                </a>
              </div>
            </ProjectCard>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Projects;
