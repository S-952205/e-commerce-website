import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const Cart = () => {
  return (
    <div className='mb-[80px] mt-[80px]'>
       <div className='grid lg:grid-cols-3 grid-cols-1'>
          {/**item div jo right side pay show hoga */}
          <div className='col-span-2'>
           {/**CartCard component hai jismain yeh props jainge or cardcomponent render hoga lrft-side pay */} 
           <CartCard src='/pictures/tshirt.jpg' title='White T-Shirt Orange Printed' size='L' price={150}/>
          </div>
          {/**order summary*/}  
          <div className='bg-myblack/5 p-5'>

             {/**Heading */}
            <h2 className='scroll-m-20 text-lg font-semibold tracking-tight
             text-myblack uppercase'>Order Summary</h2> 

            {/**Divider */}
            <div className="divider mt-0 mb-1"></div>

            {/**Pricing */}
            <div className='text-sm capitalize tracking-tight text-myblack font-medium'>
              <div className='flex justify-between items-center'>
                <h2>sub total</h2>
                <h2>$1500</h2>
              </div> 

               {/* Delivery Charges */}  
              <div className='flex justify-between items-center'>
                <h2>delivery charges</h2>
                <h2>TBD</h2>
              </div> 
              
              {/* Sales Tax */}
              <div className='flex justify-between items-center'>
                <h2>sales tax</h2>
                <h2>TBD</h2>
              </div>

            </div>
            
            {/**divider */}
            <div className="divider mt-0 mb-1"></div>
            {/**Estimate */}
            <div className='flex justify-between items-center text-myblack text-sm uppercase font-semibold'>
                <h2>Estimated Charges</h2>
                <h2>$1500</h2>
            </div>
            

            {/**divider */}
            <div className="divider mt-0 mb-1"></div>
            <div className='flex justify-center items-center w-full'>
              <Button className='text-xs tracking-tight text-white bg-myblack uppercase
               hover:bg-transparent hover:text-myblack duration-300 hover:shadow-md'>
                  Proceed to checkout
              </Button>
            </div>

            {/**divider */}
            <div className="divider mt-0 mb-1"></div>
            <p className='italic text-xs text-center text-myblack tracking-tight w-[97%] font-semibold'>
                {`*delivery charges and sales tax will be calculated in the checkout page`}</p>
          </div>
       </div>
    </div>
  )
}

export default Cart
