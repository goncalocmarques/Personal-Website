import { Link } from "react-router-dom";

const ProjectSlide = (project) => {

    const iconsWidth = 48;
    const iconsHeight = iconsWidth;
    let link = `/${project.id}`;
    return (
      <div className='flex md:flex-row flex-col-reverse justify-around md:ml-32 md:mr-10 mx-10'>
        <div className='flex flex-col justify-center items-center relative md:w-1/3 rounded-3xl md:px-5'>
            <img src={project.image} alt={project.image_alt} className='h-full w-full object-cover object-center min-w-56 overflow-hidden rounded-3xl shadow-xl'/>
            <Link to={link} className="w-full">
                <button className='absolute md:bottom-5 bottom-2 left-1/2 bg-buttonGray h-10 w-32 rounded-2xl text-white opacity-85 transform -translate-x-1/2 -translate-y-1/2'>
                    Know more
                </button>
            </Link>
        </div>
        <div className='flex flex-col justify-center gap-8 md:w-2/3 md:px-32 py-10 w-full'>
            <div className='flex md:justify-between justify-center w-full'>
                <h1 className='md:text-4xl text-xl'>{project.title}</h1>
                <div className='flex flex-row gap-5 md:mr-32 pl-10'>
                    {project.github != null && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.0055 1.44446C4.31595 1.44446 1.33331 4.44908 1.33331 8.16622C1.33331 11.1375 3.24439 13.6527 5.89557 14.5429C6.22703 14.6098 6.34844 14.3982 6.34844 14.2203C6.34844 14.0644 6.33752 13.5303 6.33752 12.9738C4.48148 13.3745 4.09497 12.1725 4.09497 12.1725C3.7967 11.3935 3.35474 11.1932 3.35474 11.1932C2.74726 10.7815 3.39899 10.7815 3.39899 10.7815C4.07285 10.826 4.42644 11.4714 4.42644 11.4714C5.02286 12.4952 5.98393 12.2059 6.37057 12.0278C6.42575 11.5938 6.60261 11.2934 6.7904 11.1265C5.31007 10.9706 3.75258 10.392 3.75258 7.81003C3.75258 7.07554 4.01754 6.47461 4.43737 6.00726C4.37113 5.84036 4.13909 5.15025 4.50374 4.22661C4.50374 4.22661 5.06711 4.04851 6.33738 4.91658C6.88123 4.76944 7.44209 4.69459 8.0055 4.69396C8.56886 4.69396 9.14316 4.77195 9.67347 4.91658C10.9439 4.04851 11.5073 4.22661 11.5073 4.22661C11.8719 5.15025 11.6397 5.84036 11.5735 6.00726C12.0044 6.47461 12.2584 7.07554 12.2584 7.81003C12.2584 10.392 10.7009 10.9594 9.20953 11.1265C9.45263 11.3379 9.66241 11.7384 9.66241 12.3728C9.66241 13.2742 9.65149 13.9977 9.65149 14.2201C9.65149 14.3982 9.77304 14.6098 10.1044 14.543C12.7555 13.6525 14.6666 11.1375 14.6666 8.16622C14.6775 4.44908 11.684 1.44446 8.0055 1.44446Z"/>
                            </svg>
                        </a>
                    )}
                    {project.website != null && (
                        <a href={project.website} target="_blank" rel="noreferrer">
                            <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_403_3518)">
                                    <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM20.647 7H17.426C16.705 5.32899 15.7556 3.76609 14.605 2.356C17.1515 3.04893 19.3223 4.71747 20.647 7ZM16.5 12C16.4918 13.0181 16.3314 14.0293 16.024 15H7.97601C7.66866 14.0293 7.50821 13.0181 7.50001 12C7.50821 10.9819 7.66866 9.97068 7.97601 9H16.024C16.3314 9.97068 16.4918 10.9819 16.5 12ZM8.77801 17H15.222C14.3732 18.6757 13.2882 20.2208 12 21.588C10.7114 20.2212 9.62625 18.676 8.77801 17ZM8.77801 7C9.62677 5.32427 10.7119 3.77916 12 2.412C13.2886 3.77877 14.3738 5.32396 15.222 7H8.77801ZM9.40001 2.356C8.24767 3.76578 7.29659 5.3287 6.57401 7H3.35301C4.67886 4.71643 6.85166 3.04775 9.40001 2.356ZM2.46101 9H5.90001C5.64076 9.97915 5.50636 10.9871 5.50001 12C5.50636 13.0129 5.64076 14.0209 5.90001 15H2.46101C1.84635 13.0472 1.84635 10.9528 2.46101 9ZM3.35301 17H6.57401C7.29659 18.6713 8.24767 20.2342 9.40001 21.644C6.85166 20.9522 4.67886 19.2836 3.35301 17ZM14.605 21.644C15.7556 20.2339 16.705 18.671 17.426 17H20.647C19.3223 19.2825 17.1515 20.9511 14.605 21.644ZM21.539 15H18.1C18.3592 14.0209 18.4936 13.0129 18.5 12C18.4936 10.9871 18.3592 9.97915 18.1 9H21.537C22.1517 10.9528 22.1517 13.0472 21.537 15H21.539Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_403_3518">
                                        <rect width={iconsWidth} height={iconsHeight}/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    )}
                </div>
                
            </div>
            
            <p className='md:w-3/5 w-full md:text-lg text-sm'>{project.description}</p>

        </div>
      </div>
    );
  }
  
  export default ProjectSlide;