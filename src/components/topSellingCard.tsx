import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const TopSellingCard = (  
    {
    src,
    title,
    description,
    price
    }: {src:string, title:string, description:string, price:string}) => {
  return (
    <div>
      {/*Ek reusable component banaya jo har category ka layout define karega yani 150plus bhee 
      categories ajain yeh layput hee adopt krein gee*/}
      <div className="w-[350px] h-[35rem] p-4 rounded-xl shadow-md relative group">
        <div className="block overflow-hidden h-[22rem] rounded">
          <Image
            src={src}
            alt="top"
            width={400}
            height={400}
          />
        </div>

          <div className="mt-4">
            <h2 className="scroll-m-20 pb-2 text-lg font-semibold 
            tracking-tight first:mt-0 text-myblack">{title}</h2>
            <h2 className="mt-2 scroll-m-20 text-sm font-semibold 
            tracking-tight first:mt-0 text-myblack/90 line-clamp-1">{description}</h2>
            <p className='mt-2 scroll-m-20 pb-2 text-base font-semibold 
            tracking-tight first:mt-0 text-myblack'>{price}</p>
          </div>

          <div>
            <Button className='absolute bottom-2 right-2 scroll-m-20 pb-2 text-xs font-semibold
            tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack'>
               <FaShoppingCart className='group-hover:text-myblue'/>
               Add to Cart
            </Button>

            <Button className='absolute bottom-2 roubded-xl left-2 scroll-m-20 pb-2 text-xs font-semibold
            tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack'>
               <FaHeart className='group-hover:text-myblue'/>
               Buy Now
            </Button>
          </div>

      </div>
    </div>
  )
}

export default TopSellingCard
