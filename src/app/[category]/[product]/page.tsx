import SlugComponent from '@/components/slugComponent';
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaHeart, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa'

const Product = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/**Image*/}
          <SlugComponent/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/**Category Name*/}
            <h2 className="scroll-m-20 text-sm font-semibold tracking-widest">
              Women Tops
            </h2>

            {/**Heading*/}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myblack">
              Black Printed T-Shirt
            </h1>

            {/* sm ratings*/}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myblue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myblue"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myblue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myblue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myblue"
              />
            </div>


            {/**paragraph*/}
            <p className="mt-2 leading-relaxed text-myblack/80 scroll-m-20 text-base font-normal text-myblack">
              This t-shirt combines comfort and style effortlessly, perfect for
              casual outings or relaxing at home, crafted with premium fabrics
              for lasting wear, and designed to make you feel confident and
              trendy every time you wear it
            </p>

            {/**Colors*/}
            <div className="flex mt-6 items-center pb-4 border-b-2 border-gray-100 mb-3">
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myblack">
                  Color
                </span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
              </div>

              {/**Sizes*/}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myblack">
                  Size
                </span>
                    <select className="select select-bordered">
                      <option disabled selected>Select Size</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                
              </div>
            </div>
              
              {/**Quantity */}
              <div className='flex items-center'>
                 <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myblack">
                   Quantity
                 </span>
                <Button
                className="scroll-m-20 pb-2 text-xs font-semibold w-fit h-fit group
                tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack">
              
                <FaMinus className="group-hover:text-myblue" />
                Less
                </Button>

                <div className='ml-2 mr-2 scroll-m-20 text-base font-semibold tracking-tight'>1</div> 

                 <Button
                className="scroll-m-20 pb-2 text-xs font-semibold w-fit h-fit group
                tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack">
              
                <FaPlus className="group-hover:text-myblue" />
                Add
                </Button>     
              </div> 

             {/**Divider */}
            <div className="divider"></div> 
            <div className="flex items-center justify-between">
              {/**Price*/}
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myblack">
                $58.00
              </span>

              {/**Button same wohe copy kiya jo topsellingcard main design kiya tha*/}
              <Button
                className="scroll-m-20 pb-2 text-xs font-semibold
            tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack"
              >
                <FaShoppingCart className="group-hover:text-myblue" />
                Add to Cart
              </Button>
            </div>

            {/**Button*/}
            <Button
              className="mt-4 w-full scroll-m-20 pb-2 text-xs font-semibold
            tracking-tight first:mt-0 bg-myblack text-white hover:bg-transparent hover:text-myblack"
            >
              <FaHeart className="group-hover:text-myblue" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product
