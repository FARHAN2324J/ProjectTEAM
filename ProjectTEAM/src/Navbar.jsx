import { NavLink } from "react-router-dom";
import { useState } from "react";
import './App.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  function ShowIcon() {
      setShowIcon(!showIcon);
      setIsVisible(!isVisible);
      setIsCross(!isCross);
      
  }
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      aboutSection.classList.add('highlight');
      setTimeout(() => {
        aboutSection.classList.remove('highlight');
      }, 3000); // Remove the highlight class after 1s
    }
  };

  const [isCross, setIsCross] = useState(false);


  
  return (
    <nav className="bg-[#161617cc] text-[#fffc] p-2 fixed top-0 w-full z-50 Nav">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <a href="/" className="text-white text-lg font-semibold">
          GeeksforGeeks
        </a>
        <div>
        <svg
      className="cursor-pointer"
      onClick={ShowIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isCross ? (
        <> 
          <line x1="21" y1="21" x2="3" y2="3"></line>
          <line x1="3" y1="21" x2="21" y2="3"></line>
        </>
      ) : (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={ShowIcon}

        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
      )}
    </svg>
      
      
    </div>
        {/* Hamburger Menu for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {/* Hamburger Icon and Close Icon */}
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto gap-5 
          md:space-x-4 absolute md:relative top-16 left-0 md:top-0 
          md:left-0 p-4 md:p-0 bg-[#161617cc] md:bg-transparent 
          transition-all duration-500 items-center ease-in-out transform ${isOpen ? 
          'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
        >
          <NavLink
            className={({ isActive }) => isActive ? "" : "text-[#eee]  block py-5"}
            to="/"
          >
            <button onClick={handleScrollToTop} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="27" viewBox="0 0 48 48">
<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M13.4,13.8l-3.6,2.9c-1.4,1.1-2.3,2.9-2.3,4.7v18.1c0,1.1,0.9,2,2,2h20"></path><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M35,41.5h3.5c1.1,0,2-0.9,2-2V21.4c0-1.8-0.8-3.6-2.3-4.7L24.6,6c-0.4-0.3-0.9-0.3-1.2,0l-4.6,3.6"></path><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M18.5,35.7v-8.2c0-0.6,0.4-1,1-1h8.9c0.6,0,1,0.4,1,1v14"></path>
</svg></button>
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "md:py-2 md:px-4 text-amber-400 md:text-[#eee] transition md:bg-[#2c2c2c] rounded-sm cursor-pointer  " : "text-white hover:text-gray-200 block py-5"}
            to="/login"
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="25"
  height="26"
>
  <path
    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
    fill="currentColor"
  />
</svg>
          </NavLink>
          <button
            className="text-white hover:text-gray-200 cursor-pointer py-5"
            onClick={() => {
              handleScroll();
              setIsOpen(false);
            }}
          >
            About
          </button>
        </div>
      </div>
      <div className={`search-input-container absolute w-[65%] sm:w-[50%] text-[#fffc] p-2 left-[25%] top-[100%] bg-[#161617cc] ${isVisible ? 'fade-in' : ''}`}>
              {isVisible && (
              <div className={'flex justify-center items-center gap-2 p-3 border-[#fffc] border-b w-[80%] m-auto'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" className='w-[90%] outline-none' placeholder="search..." />
            
              </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
