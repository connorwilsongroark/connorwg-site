const ButtonSecondary = ({ children }) => {
  return (
    <button className='py-2 px-4 max-h-[60px] border font-bold border-blue-500 text-blue-500 rounded-md flex justify-between items-center group md:py-4 md:text-xl   hover:text-blue-400 hover:border-blue-400 duration-200'>
      {children}
    </button>
  );
};

export default ButtonSecondary;
