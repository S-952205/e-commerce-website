'use client'
import { useState, useEffect } from 'react';
import TopSellingCard from '@/components/topSellingCard';


interface TopSellingItem {
  src: string;
  title: string;
  description: string;
  price: string;
  category: string;
  product: string;
};

const Category = () => {

    // const topsells = [
    //     {
    //       src: "/pictures/tshirt1.jpg",
    //       title: "Black Printed T-Shirt",
    //       description: "Comfortable and stylish, perfect for everyday wear",
    //       price: "$150",
    //       category: "tops",
    //       product: "black-shirt"
    //     },
    //     {
    //         src: '/pictures/tshirt.jpg',
    //         title: 'White T-Shirt Orange Printed',
    //         description: 'Lightweight and trendy, ideal for summer vibes',
    //         price: '$250',
    //         category: "tops",
    //         product: "white-shirt"

    //   },
    //   {
    //       src: '/pictures/tshirt2.jpg',
    //       title: 'White T-Shirt Black Printed',
    //       description: 'Bold design for those who love creative styles',
    //       price: '$190',
    //       category: "tops",
    //       product: "white-shirt"

    //   },
    //   {
    //     src: '/pictures/coat.jpg',
    //     title: 'Long Sleeve Coat',
    //     description: 'Elegant and warm, ideal for chilly evenings',
    //     price: '$350',
    //     category: "tops",
    //     product: "long-sleeve"

    //   },
    //   {
    //   src: '/pictures/blackshirt.jpg',
    //   title: 'Black T-Shirt White Printed',
    //   description: 'Classic look with a modern touch of comfort',
    //   price: '$250',
    //   category: "tops",
    //   product: "black-white"

    //   },
    //   {
    //     src: '/pictures/redshirt.jpg',
    //     title: 'Red T-Shirt',
    //     description: 'Vibrant and comfy, perfect for casual outings',
    //     price: '$150',
    //     category: "tops",
    //     product: "red-tshirt"
  
    //   }
    // ];  
  
    const [topsells, setTopsells] = useState<TopSellingItem[]>([]); // State to store the fetched data

    /**Fetch ke baad do steps hotay hain:
     Pehle API ka response lena aur usse readable banana (JSON format mein).
     Us readable data ko use karna. */
    // useEffect(() => {
    //   // Fetch data from API endpoint
    //   fetch('/api/category')  //fetch say data fetch kiya
    //     .then((response) => response.json()) // issline pay ussay json main convert kiya takay readable hoo
    //     .then((data) => {setTopsells(data.topsells);}) // Store the fetched data in state
    // }, []); //(dependency array): Yeh bata raha hai ke yeh effect sirf ek dafa chale, jab component load ho raha ho.

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/category');
        const data = await response.json();
        setTopsells(data.topsells); 
      };
    
      fetchData(); 
    }, []);
    
    return (
    <div className="mb-[80px] mt-[60px]">

      <div className="text-center mb-20">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4 capitalize font-Satoshi">Tops</h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
        </div>
      </div>

      {/**Categoriesof tops yeh code topsellings say copy kiya*/}
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


export default Category
