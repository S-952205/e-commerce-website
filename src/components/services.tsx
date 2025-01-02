import Image from "next/image";

const Services = () => {
  return (
    <section className="text-mygrey body-font mb-[80px]">
      <div className="container px-5 mx-auto"> {/**padding thee yahan ussay remove kiya */}
        <div className="text-center mb-20">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4 font-Satoshi">
            Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
          </div>
        </div>

        {/**Delivery */}
        <div className="flex justify-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-20 h-20 inline-flex items-center justify-center
             rounded-full mb-5 flex-shrink-0">
              <Image
                src={"/pictures/truck.png"}
                alt="van"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myblack group-hover:text-myblue scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3 capitalize">
                Free Delivery 
              </h2>
              <p className="scroll-m-20 text-myblack/80 group-hover:text-gray-500 text-base font-semibold tracking-tight lg:text-lg">
                Free Delivery on Orders Above $3000
              </p>
            </div>
          </div>

            {/**Customer Service */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-20 h-20 inline-flex items-center justify-center
             rounded-full mb-5 flex-shrink-0">
              <Image
                src={"/pictures/customer-service.png"}
                alt="van"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myblack capitalize group-hover:text-myblue scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
              24/7 customer support
              </h2>
              <p className="line-clamp-2 scroll-m-20 text-myblack/80  group-hover:text-gray-500  text-base font-semibold tracking-tight lg:text-lg">
              customer support for all your inquiries
              </p>
            </div>
          </div>

            {/**Cash Return */}
          <div className=" p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-20 h-20 inline-flex items-center justify-center
             rounded-full mb-5 flex-shrink-0">
              <Image
                src={"/pictures/cash.png"}
                alt="van"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </div>
            <div className="flex-grow ">
              <h2 className="text-myblack capitalize group-hover:text-myblue scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
                Money back guarantee 
              </h2>
              <p className="line-clamp-2 scroll-m-20 text-myblack/80 group-hover:text-gray-500 text-base font-semibold tracking-tight lg:text-lg">
              Easy returns for damaged products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services
 