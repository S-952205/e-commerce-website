import Link from 'next/link';
import React from 'react'
import { NavigationMenuDemo } from './navlinks';
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-mygrey">
        <div className="navbar-start">
          <div className="dropdown">
            {/**Yahan hamburger icon add kiya hai*/}
            <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Women</summary>
                <ul className="p-2">
                  <li>
                    <Link href={'/tops'}>Tops</Link>
                  </li>
                  <li>
                    <Link href={'/pants'}>Pants</Link>
                  </li>
                  <li>
                    <Link href={'/accessories'}>Accessories/Jewelry</Link>
                  </li>
                  <li>
                    <Link href={'/footwear'}>Footwear</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
            </ul>
          </div>
          <h1 className='font-bold font-Satoshi text-[22px] pl-[5px] hidden lg:block'><span className='text-myblue'>W</span>OMENWEAR</h1>
        </div>

        {/**iss line main hamara center hai navbar ka jismain links hain ya menu kehsktay navigation */}
        <div className="navbar-center">
        <h1 className='font-bold text-[22px] pl-[5px] font-Satoshi block lg:hidden'><span className='text-myblue'>W</span>OMENWEAR</h1>
          <div className="hidden lg:flex">
             {/**yeh daisy ui say add kiya phir iska code copy kiya
             or navlinks main paste kiye kuch changes kiye or issay yahan import krdiya */}
            <NavigationMenuDemo/> 
          </div>
        </div>
        {/**Cart*/}
        {/**jb cart ka route banaya tw yahn say kuch remove kiye jesay cart pay click krnay say box show horaha
         *  tha magar humein cart pay click krkay cart kay page pay jana tha tw humnay woo part remove kiya.
         * or cart ko link main wrap kiya.
         */}
         
          <div className="navbar-end">
           <Link href={'/cart'}>
             <div tabIndex={0} role="button" className="mr-4 ">
              <div className="indicator group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:text-[#4B70F5] duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {/**Cart ke andar ki item count dikhata hai. */}
                <span className="badge badge-sm indicator-item font-semibold 
                 group-hover:text-white group-hover:bg-myblack bg-[#4B70F5] text-white">8</span>
              </div>
              </div>   
            </Link>         
          </div> 
      </div>
    </div>
  );
}

export default Navbar
