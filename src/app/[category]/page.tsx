import TopSellingCard from '@/components/topSellingCard';

const Category = () => {
    const topsells = [
        {
          src: "/pictures/tshirt1.jpg",
          title: "Black Printed T-Shirt",
          description: "Comfortable and stylish, perfect for everyday wear",
          price: "$150",
          category: "tops",
          product: "black-shirt"
        },
        {
            src: '/pictures/tshirt.jpg',
            title: 'White T-Shirt Orange Printed',
            description: 'Lightweight and trendy, ideal for summer vibes',
            price: '$250',
            category: "tops",
            product: "white-shirt"

      },
        {
          src: '/pictures/tshirt2.jpg',
          title: 'White T-Shirt Black Printed',
          description: 'Bold design for those who love creative styles',
          price: '$190',
          category: "tops",
          product: "white-shirt"

      },
      {
        src: '/pictures/coat.jpg',
        title: 'Long Sleeve Coat',
        description: 'Elegant and warm, ideal for chilly evenings',
        price: '$350',
        category: "tops",
        product: "long-sleeve"

      },
      {
      src: '/pictures/blackshirt.jpg',
      title: 'Black T-Shirt White Printed',
      description: 'Classic look with a modern touch of comfort',
      price: '$250',
      category: "tops",
      product: "black-white"

      },
      {
        src: '/pictures/redshirt.jpg',
        title: 'Red T-Shirt',
        description: 'Vibrant and comfy, perfect for casual outings',
        price: '$150',
        category: "tops",
        product: "red-tshirt"
  
      }
    ];  
  return (
    <div className="mb-[80px] mt-[60px]">

      <div className="text-center mb-20">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl
           text-gray-900 mb-4 capitalize">Tops</h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myblue inline-flex" />
        </div>
      </div>

      {/**Categoriesof tops yeh code topsellings say copy kiya*/}
      <div className='flex flex-wrap justify-center gap-5'>
         {
            topsells.map((items, i)=>{
                return(
                    <TopSellingCard src={items.src} title={items.title} 
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
