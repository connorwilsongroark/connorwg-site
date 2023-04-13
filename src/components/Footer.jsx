import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    // Full footer section
    <div className='w-full bg-white flex justify-between items-center relative'>
      {/* Footer content */}

      <footer className='max-w-7xl my-4 w-full flex justify-center items-center flex-col text-center mx-auto'>
        {/* <p className='max-w-[90%] text-sm'>
          Designed and built by Connor Wilson-Groark - 2023
        </p> */}
        <ul className='flex'>
          <li className=''>
            <button className='text-blue-500 duration-200 hover:text-blue-400 m-1 group relative flex justify-center items-center cursor-default'>
              <div className='absolute -top-8  scale-0 bg-blue-500 group-hover:scale-100 group-hover:bg-blue-400 p-1 rounded-md text-white  font-bold text-sm duration-200 flex justify-center'>
                LinkedIn
                <div className='absolute top-6  border-solid border-t-blue-400 border-t-8 border-x-transparent border-x-8 border-b-0'></div>
              </div>
              <a
                href='https://www.linkedin.com/in/connorwilsongroark/'
                target='_blank'
              >
                <AiFillLinkedin className='w-9 h-9' />
              </a>
            </button>
          </li>
          <li className=''>
            <button className='text-blue-500 duration-200 hover:text-blue-400 m-1 group relative flex justify-center items-center cursor-default'>
              <div className='absolute -top-8  scale-0 bg-blue-500 group-hover:scale-100 group-hover:bg-blue-400 p-1 rounded-md text-white font-bold text-sm duration-200 flex justify-center'>
                GitHub
                {/* Triangle */}
                <div className='absolute top-6  border-solid border-t-blue-400 border-t-8 border-x-transparent border-x-8 border-b-0'></div>
              </div>
              <a href='https://github.com/connorwilsongroark/' target='_blank'>
                <AiFillGithub className='w-9 h-9' />
              </a>
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
