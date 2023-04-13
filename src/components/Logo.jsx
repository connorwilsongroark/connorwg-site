import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className='scale-90'>
      {/* circle */}
      <Link to='/'>
        <div className='w-[130px] h-[75px] rounded-full bg-blue-500 relative hover:bg-blue-400 duration-200'>
          <img
            src='signatureSvg.svg'
            className=' h-[100px] w-[200px] absolute -bottom-4 -rotate-12'
            alt=''
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
