import React from 'react'

const Promotion = () => {
  return (
    <div className="mb-[80px] mt-[80px]">
      {/**Center Heading */}
      <div className="text-center mb-20">
        <h1
          className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4">
          Promotion
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
        </div>
      </div>

      {/**First Promo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="hero h-[25rem] promo1-img rounded-xl">
          {" "}
          {/**custom clas bani apni image kayliye */}
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="uppercase text-white scroll-m-20 text-4xl font-bold tracking-tight">
                Up to <span className="text-myblue">60%</span>Off
              </h1>
              <p className="scroll-m-20 text-base font-medium tracking-tight">
                Flash Sale, get upto 60% off on the Season variant
              </p>
            </div>
          </div>
        </div>

        {/**Second Promo */}
        <div className="hero h-[25rem] promo2-img rounded-xl">
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="uppercase text-white scroll-m-20 text-4xl font-bold tracking-tight">
                Up to <span className="text-myblue">30%</span>Off
              </h1>
              <p className="scroll-m-20 text-base font-medium tracking-tight">
                Flash Sale, get upto 30% off on the Jewelry Arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion
