import React from 'react'
import TopSellingCard from './topSellingCard';

/*Top selling main humnay categories.map() ka use kiya aur ek ek object ko
 * Categories component ke andar bheja. Har render hone wali category ka alag design
 * aur data hai, magar layout sabka ek hi hai jo kay categories component main defined hai */

/*Aap ek hi TopSellingCard component use karke har product ko uniquely dikhate hain.*/

const TopSelling = () => {

  const topsells = [
    {
      src: "/pictures/tshirt1.jpg",
      title: "Black Printed T-Shirt",
      description: "Best t-shirt for women",
      price: "$150",
      category: "tops",
      product: "black-shirt"
    },
    {
        src: '/pictures/tshirt.jpg',
        title: 'White Printed T-Shirt',
        description: 'Stylish t-shirt for summer wear',
        price: '$250',
        category: "tops",
        product: "white-shirt"

    },
    {
        src: '/pictures/shoes3.jpg',
        title: 'Casual Running Shoes',
        description: 'Comfortable and trendy running shoes for women',
        price: '$350',
        category: "footwear",
        product: "nike-shoes"

    }
  ];

  return (
    <div className="mb-[80px] mt-[80px]">
      {/**Center Heading */}
      <div className="text-center mb-20">
        <h1
          className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4"
        >
          {" "}
          Top Selling Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
        </div>
      </div>

      {/**map on topsells variable which is holding array of object*/}
      <div className='flex flex-wrap justify-center gap-5'>
         {
            topsells.map((items, i)=>{
                return(
                    <TopSellingCard key={i} src={items.src} title={items.title}
                     description={items.description}  price={items.price}
                     category={items.category} product={items.product}/>
                )
            })
         }
      </div>
       

    </div>
  );
}

export default TopSelling
