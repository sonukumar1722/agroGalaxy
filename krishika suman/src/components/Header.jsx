import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navbarLinks = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About Us",
      url: "/About"
    },
    {
      title: "Products",
      url: "/shop"
    },
    {
      title: "Media",
      url: "/product"
    },
    {
      // title: "News & Articles",
      title: "Cart",
      // url: "/news-and-articles"
      url: "/cart"
    },
    {
      title: "Contact Us",
      url: "/contact"
    }
  ];

  // State to manage the visibility of the small navigation bar
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = e => {
    // console.log("Button clicked!")
    e.preventDefault()
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[75px]">
          <Link to="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Shivam Patel</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className='hidden sm:flex'>
              <Link to="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
              <Link to="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
            </div>

            <button onClick={handleClick} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Navigation for medium and larger devices */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-[#009444] lg:p-0 dark:text-white" aria-current="page">{link.title}</Link>
                </li >
              ))}
            </ul>
          </div>

          {/* Navigation for small devices */}
          <nav className={`md:hidden z-50 absolute right-6 top-16 text-[#009444] sidebar flex space-x-4 justify-center ${isNavOpen ? 'block' : 'hidden'}`}>
            <div className='bg-red-500 rounded-md w-40 p-5 '>
              <ul className="flex flex-col">
                {navbarLinks.map((link, index) => (
                  <li key={index} className='mt-3'>
                    <Link to={link.url} className="hover:text-green-300">{link.title}</Link>
                  </li>
                ))}
              </ul>
              <div className='sm:hidden text-center my-3'>
                <Link to="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 block mb-3 border">Log in</Link>
                <Link to="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
