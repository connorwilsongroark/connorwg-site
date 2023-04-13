const ButtonPrimary = ({ children }) => {
  return (
    <button className='py-2 px-4 rounded-md font-bold bg-blue-500 text-white shadow-md hover:bg-blue-400 duration-200 w-72 max-w-full md:py-4 md:text-xl max-h-[60px]'>
      {children}
    </button>
  );
};

export default ButtonPrimary;
