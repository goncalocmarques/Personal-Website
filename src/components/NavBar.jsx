import { Link } from "react-router-dom";

function NavBar() {
    const iconsWidth = 24;
    const iconsHeight = iconsWidth;

    return (
      <nav className="sticky left-1/2 top-0 z-50 flex flex-col items-center h-10 bg-backgroundColor">
         <ul className="sm:hidden flex flex-row justify-center gap-10 items-center w-auto my-5 px-5 py-10 h-10 rounded-3xl stroke-gray-500 shadow-2xl bg-slate-50 list-none">
            <li>
              <Link to="/contact">
                <svg width={iconsWidth} height={iconsHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z" stroke="currentColor"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/#portfolio">
                <svg className="text-footerIcons hover:text-footerText" width={iconsWidth} height={iconsHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16" stroke="currentColor"/>
                </svg>
              </Link>
            </li>
            <li>
              <a href="/#about">
                <svg className="text-footerIcons hover:text-footerText" width={iconsWidth} height={iconsHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z" stroke="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <Link to="#">
                <svg className="text-footerIcons hover:text-footerText" width={iconsWidth} height={iconsHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z" stroke="currentColor"/>
                </svg>
              </Link>
            </li>
        </ul>
        <ul className="hidden sm:flex flex-row justify-center gap-8 items-center w-96 my-5 p-10 h-10 rounded-3xl stroke-gray-500 shadow-2xl bg-slate-50 list-none">
            <li className="hover:text-textHoverColor"><Link to="/">Home</Link></li>
            <li className="hover:text-textHoverColor"><Link to="/#portfolio">Portfolio</Link></li>
            <li className="hover:text-textHoverColor"><Link to="/#about">About</Link></li>
            <li className="flex items-center justify-center bg-slate-500 rounded-3xl "><Link to="/contact" className="w-24 p-2 text-center text-white ">Contact</Link></li>
        </ul>
      </nav>
      
    );
  }
  
  export default NavBar;