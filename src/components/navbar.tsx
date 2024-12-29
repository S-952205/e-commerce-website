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
                    <Link href={'#'}>Tops</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Pants</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Accessories/Jewelry</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Footwear</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={'#'}>About</Link>
            </li>
            <li>
              <Link href={'#'}>Contact</Link>
            </li>
            </ul>
          </div>
          <h1 className='font-bold text-[22px] pl-[5px] hidden lg:block'><span className='text-myblue'>W</span>OMEN</h1>
        </div>

        {/**iss line main hamara center hai navbar ka jismain links hain ya menu kehsktay navigation */}
        <div className="navbar-center">
        <h1 className='font-bold text-[22px] pl-[5px] block lg:hidden'><span className='text-myblue'>W</span>OMEN</h1>
          <div className="hidden lg:flex">
             {/**yeh daisy ui say add kiya phir iska code copy kiya
             or navlinks main paste kiye kuch changes kiye or issay yahan import krdiya */}
            <NavigationMenuDemo/> 
          </div>
        </div>
        {/**Cart margin right diya line 66 pay*/}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
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

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
