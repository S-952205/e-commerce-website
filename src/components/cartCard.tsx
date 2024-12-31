import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartCard = ({src, title, size, price}:{src:string, title:string, size:string, price:number}) => {
  return (
    <div className="flex justify-between items-center p-10">
      {/**Image */}  
      <Image src={src} alt="shirt" width={100} height={100} className='w-[120px] h-[120px]' />

      <div className='flex justify-between items-center px-5 w-full'>
        {/**div jisma heading size or button arahay  */}
        <div>
         {/**title */}   
         <h2 className='text-sm font-semibold leading-none line-clamp-1
          text-myblack'>{title}</h2>
           {/**size */} 
          <p className='text-sm mt-2 font-semibold leading-none line-clamp-1 text-black/50'>
           size:&nbsp;<span>{size}</span>
          </p>

         {/**button minus and plus eik div main*/} 
        <div className='flex items-center mt-2'>
          <Button className='group rounded-xl hover:bg-white hover:text-myblack bg-black text-white
           w-fit h-fit text-xs duration-300'>
             <FaMinus className='group-hover:text-myblack'/>
          </Button>

          {/**middle main number */}
          <div className='ml-2 mr-2 text-sm text-black/50 font-semibold tracking-tight'>1</div>

          <Button className='group rounded-xl hover:bg-white hover:text-myblack bg-black text-white
           w-fit h-fit text-xs duration-300'>
             <FaPlus className='group-hover:text-myblack'/>
          </Button>
        </div> 
        {/**price and delete */}
        <div className='lg:hidden flex flex-col gap-3 mt-2'>
              <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myblack'>
                  <span>Price:&nbsp;</span>{price}</h2>
              <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />
          </div>
       </div>
      </div>
      
      {/**price and delete */}
      <div className='hidden lg:flex flex-col items-end gap-5'> {/**hide hojaiga wese or lg main show hoga */}
         <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myblack'>
         <span>Price:&nbsp;</span>{price}</h2>
         <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
      </div>
    </div>
  );
}

export default CartCard
