import TopSellingCard from '@/components/topSellingCard';

const Category = () => {
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
