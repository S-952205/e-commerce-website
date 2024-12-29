import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-[80px] mt-[80px]">
      {/**Center Heading */}
      <div className="text-center mb-20">
        <h1
          className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4"
        >
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
        </div>
      </div>

      {/**Categories main div*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/**1st */}
        <div className="overflow-hidden z-10 mx-auto relative group mb-5 lg:mb-0">
         <Link href={'#'}>
          <Image
            src={"/pictures/tops.jpg"}
            alt="tops"
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-xl hover:scale-125 duration-500
            "
          />
          <div
            className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500
           scroll-m-20 text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Tops</h2>
          </div>

          <div
            className="block lg:hidden absolute bottom-16 scroll-m-20 z-[100]
           text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Tops</h2>
          </div>
          </Link>
        </div>

        {/**second */}
        <div className="mb-5 lg:mb-0 overflow-hidden z-10 mx-auto relative group">
        <Link href={'#'}>
          <Image
            src={"/pictures/jeans.jpg"}
            alt="tops"
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-xl hover:scale-125 duration-500
            "
          />
          <div
            className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500
           scroll-m-20 text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Jeans</h2>
          </div>

          <div
            className="block lg:hidden absolute bottom-16 scroll-m-20 z-[100]
           text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Jeans</h2>
          </div>
          </Link>
        </div>

        {/**third */}
        <div className="mb-5 lg:mb-0 overflow-hidden z-10 mx-auto relative group">
        <Link href={'#'}>
          <Image
            src={"/pictures/accessories.jpg"}
            alt="tops"
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-xl hover:scale-125 duration-500
            "
          />
          <div
            className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500
           scroll-m-20 text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Accessories</h2>
          </div>

          <div
            className="block lg:hidden absolute bottom-16 scroll-m-20 z-[100]
           text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Accessories</h2>
          </div>
          </Link>
        </div>

        {/**fourth */}
        <div className="mb-5 lg:mb-0 overflow-hidden z-10 mx-auto relative group">
        <Link href={'#'}>
          <Image
            src={"/pictures/shoes.jpg"}
            alt="tops"
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-xl hover:scale-125 duration-500
            "
          />
          <div
            className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500
           scroll-m-20 text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Shoes</h2>
          </div>

          <div
            className="block lg:hidden absolute bottom-16 scroll-m-20 z-[100]
           text-3xl font-bold tracking-tight uppercase bg-black/60 text-white
            w-full text-center"
          >
            <h2 className="">Shoes</h2>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories
