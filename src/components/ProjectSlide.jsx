import { Link } from "react-router-dom";

const ProjectSlide = (project) => {

    const iconsWidth = 48;
    const iconsHeight = iconsWidth;
    let link = `/${project.id}`;
    return (
      <div className="flex md:flex-row flex-col-reverse justify-around md:ml-32 md:mr-10 mx-10">
        <div className="flex flex-col justify-center items-center relative md:w-1/3 rounded-3xl md:px-5">
            <img src={project.image} alt={project.image_alt} className=" h-full w-full object-cover object-center min-w-56 overflow-hidden rounded-3xl"/>
            <Link to={link} className="w-full">
                <button className='absolute md:bottom-5 bottom-2 left-1/2 bg-buttonGray h-10 w-32 rounded-2xl text-white opacity-85 transform -translate-x-1/2 -translate-y-1/2'>
                    Know more
                </button>
            </Link>
        </div>
        <div className='flex flex-col justify-center gap-8 md:w-2/3 md:px-32 py-10 w-full'>
            <div className='flex md:justify-between justify-center w-full'>
                <h1 className='md:text-4xl text-xl'>{project.title}</h1>
                <Link to={project.github} className='md:mr-32 pl-10'>
                    <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0055 1.44446C4.31595 1.44446 1.33331 4.44908 1.33331 8.16622C1.33331 11.1375 3.24439 13.6527 5.89557 14.5429C6.22703 14.6098 6.34844 14.3982 6.34844 14.2203C6.34844 14.0644 6.33752 13.5303 6.33752 12.9738C4.48148 13.3745 4.09497 12.1725 4.09497 12.1725C3.7967 11.3935 3.35474 11.1932 3.35474 11.1932C2.74726 10.7815 3.39899 10.7815 3.39899 10.7815C4.07285 10.826 4.42644 11.4714 4.42644 11.4714C5.02286 12.4952 5.98393 12.2059 6.37057 12.0278C6.42575 11.5938 6.60261 11.2934 6.7904 11.1265C5.31007 10.9706 3.75258 10.392 3.75258 7.81003C3.75258 7.07554 4.01754 6.47461 4.43737 6.00726C4.37113 5.84036 4.13909 5.15025 4.50374 4.22661C4.50374 4.22661 5.06711 4.04851 6.33738 4.91658C6.88123 4.76944 7.44209 4.69459 8.0055 4.69396C8.56886 4.69396 9.14316 4.77195 9.67347 4.91658C10.9439 4.04851 11.5073 4.22661 11.5073 4.22661C11.8719 5.15025 11.6397 5.84036 11.5735 6.00726C12.0044 6.47461 12.2584 7.07554 12.2584 7.81003C12.2584 10.392 10.7009 10.9594 9.20953 11.1265C9.45263 11.3379 9.66241 11.7384 9.66241 12.3728C9.66241 13.2742 9.65149 13.9977 9.65149 14.2201C9.65149 14.3982 9.77304 14.6098 10.1044 14.543C12.7555 13.6525 14.6666 11.1375 14.6666 8.16622C14.6775 4.44908 11.684 1.44446 8.0055 1.44446Z"/>
                    </svg>
                </Link>
            </div>
            
            <p className='md:w-3/5 w-full md:text-lg text-sm'>{project.description}</p>

        </div>
      </div>
    );
  }
  
  export default ProjectSlide;