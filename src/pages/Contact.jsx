import { useEffect } from "react";
import Page from "../components/Page";

import { AiOutlineMail } from "react-icons/ai";

const Contact = ({ routeId, setCurrentPageIndex }) => {
  // Update current page on render
  useEffect(() => {
    setCurrentPageIndex(routeId);
  }, []);

  return (
    <Page>
      <div>
        <h2 className='text-5xl font-bold my-2 md:text-6xl'>Let's chat!</h2>
        <p className='max-w-2xl md:text-xl'>
          Feel free to reach out to me by email or connect on{" "}
          <a
            className='font-semibold underline text-blue-500 hover:text-blue-400 duration-200'
            href='https://www.linkedin.com/in/connorwilsongroark/'
            target='_blank'
          >
            LinkedIn
          </a>{" "}
          if you'd like to discuss hiring me or learn more about my projects.
        </p>

        <button className='mt-3 '>
          <a
            href='mailto: connorwg@gmail.com'
            className='py-2 px-4 rounded-md font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 w-72 max-w-full flex items-center justify-center group max-h-[60px] md:py-4 md:text-xl'
          >
            Email Me
            <span className=' text-xl duration-200 ml-3'>
              <AiOutlineMail />
            </span>
          </a>
        </button>
      </div>
    </Page>
  );
};

export default Contact;
