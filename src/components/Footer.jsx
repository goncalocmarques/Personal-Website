function Footer() {

    const iconsWidth = 24;
    const iconsHeight = iconsWidth;

    return (
      <footer className="w-full px-10 bg-backgroundColor pt-32 pb-10">
        <div className="flex justify-between items-center h-full">
            <p className="text-footerText my-auto">© From the desk of Gonçalo Marques</p>

            <ul className="flex sm:flex-row flex-col gap-4 justify-end items-end list-none pl-5"> {/* Icons list */}

                <li>
                    <a href="https://www.linkedin.com/in/gon%C3%A7alo-marques-30bb67300/" target="_blank" rel="noreferrer">
                        <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2.88235V13.1176C14 13.3517 13.907 13.5761 13.7416 13.7416C13.5761 13.907 13.3517 14 13.1176 14H2.88235C2.64834 14 2.42391 13.907 2.25844 13.7416C2.09296 13.5761 2 13.3517 2 13.1176V2.88235C2 2.64834 2.09296 2.42391 2.25844 2.25844C2.42391 2.09296 2.64834 2 2.88235 2H13.1176C13.3517 2 13.5761 2.09296 13.7416 2.25844C13.907 2.42391 14 2.64834 14 2.88235ZM5.52941 6.58824H3.76471V12.2353H5.52941V6.58824ZM5.68824 4.64706C5.68917 4.51357 5.66379 4.38121 5.61357 4.25753C5.56334 4.13385 5.48925 4.02128 5.39552 3.92623C5.30178 3.83119 5.19025 3.75554 5.06728 3.7036C4.94431 3.65166 4.81231 3.62445 4.67882 3.62353H4.64706C4.3756 3.62353 4.11526 3.73137 3.92331 3.92331C3.73137 4.11526 3.62353 4.3756 3.62353 4.64706C3.62353 4.91852 3.73137 5.17885 3.92331 5.3708C4.11526 5.56275 4.3756 5.67059 4.64706 5.67059C4.78055 5.67387 4.91339 5.65082 5.03797 5.60275C5.16255 5.55468 5.27644 5.48253 5.37313 5.39043C5.46982 5.29833 5.54742 5.18808 5.60149 5.06598C5.65555 4.94388 5.68503 4.81232 5.68824 4.67882V4.64706ZM12.2353 8.80471C12.2353 7.10706 11.1553 6.44706 10.0824 6.44706C9.73105 6.42947 9.38128 6.50429 9.06791 6.66407C8.75456 6.82385 8.48856 7.06299 8.29647 7.35765H8.24706V6.58824H6.58824V12.2353H8.35294V9.23176C8.32743 8.92415 8.42433 8.6189 8.62258 8.38232C8.82084 8.14573 9.10443 7.99693 9.41177 7.96824H9.47882C10.04 7.96824 10.4565 8.32118 10.4565 9.21059V12.2353H12.2212L12.2353 8.80471Z"/>
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/goncalocmarques" target="_blank" rel="noreferrer">
                        <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.0055 1.44446C4.31595 1.44446 1.33331 4.44908 1.33331 8.16622C1.33331 11.1375 3.24439 13.6527 5.89557 14.5429C6.22703 14.6098 6.34844 14.3982 6.34844 14.2203C6.34844 14.0644 6.33752 13.5303 6.33752 12.9738C4.48148 13.3745 4.09497 12.1725 4.09497 12.1725C3.7967 11.3935 3.35474 11.1932 3.35474 11.1932C2.74726 10.7815 3.39899 10.7815 3.39899 10.7815C4.07285 10.826 4.42644 11.4714 4.42644 11.4714C5.02286 12.4952 5.98393 12.2059 6.37057 12.0278C6.42575 11.5938 6.60261 11.2934 6.7904 11.1265C5.31007 10.9706 3.75258 10.392 3.75258 7.81003C3.75258 7.07554 4.01754 6.47461 4.43737 6.00726C4.37113 5.84036 4.13909 5.15025 4.50374 4.22661C4.50374 4.22661 5.06711 4.04851 6.33738 4.91658C6.88123 4.76944 7.44209 4.69459 8.0055 4.69396C8.56886 4.69396 9.14316 4.77195 9.67347 4.91658C10.9439 4.04851 11.5073 4.22661 11.5073 4.22661C11.8719 5.15025 11.6397 5.84036 11.5735 6.00726C12.0044 6.47461 12.2584 7.07554 12.2584 7.81003C12.2584 10.392 10.7009 10.9594 9.20953 11.1265C9.45263 11.3379 9.66241 11.7384 9.66241 12.3728C9.66241 13.2742 9.65149 13.9977 9.65149 14.2201C9.65149 14.3982 9.77304 14.6098 10.1044 14.543C12.7555 13.6525 14.6666 11.1375 14.6666 8.16622C14.6775 4.44908 11.684 1.44446 8.0055 1.44446Z"/>
                        </svg>
                    </a>
                </li>

                <li>
                    <a href="mailto:goncalocm10@gmail.com" target="_blank" rel="noreferrer">
                        <svg className='fill-current text-footerIcons hover:text-footerText' width={iconsWidth} height={iconsHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 3.33337H2V3.91657C2.12345 3.91646 2.24866 3.94688 2.36423 4.01109L8 7.14207L13.6358 4.01109C13.7513 3.94688 13.8765 3.91646 14 3.91657V3.33337ZM14 5.52468L8.36423 8.65566C8.13772 8.7815 7.86228 8.7815 7.63577 8.65566L2 5.52468V12.6667H14V5.52468Z"/>
                        </svg>
                    </a>
                </li>

            </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;

  