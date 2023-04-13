const ProjectCard = ({ children, side }) => {
  return (
    <div
      className={`bg-white p-2 rounded-md shadow-md
    mx-auto md:absolute md:top-1/2 md:-translate-y-1/2 md:w-2/3 md:max-w-full  ${
      side === "right" ? `md:right-0 md:mr-0 ` : `md:left-0 md:ml-0`
    }`}
    >
      {children}
    </div>
  );
};

export default ProjectCard;
