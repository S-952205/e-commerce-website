import React from 'react'
import { AiFillShopping } from "react-icons/ai";
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='mb-[80px]'>
      <div className="hero min-h-[85vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>
         <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold
             tracking-tight lg:text-5xl text-white">Trendy <span className='text-[#4B70F5]'>Looks</span></h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
            Shop our exclusive selection and elevate your style with chic and comfortable outfits
            </p>
                <Button className='hover:rounded-full outline outline-offset-2 outline-2 
                                   group hover:outline-myblue duration-300'>
                    <AiFillShopping className="group-hover:text-myblue 
                    group-hover:animate-bounce duration-300"/> Shop Now
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
