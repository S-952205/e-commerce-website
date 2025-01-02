import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    const topsells = [
      {
        src: "/pictures/tshirt1.jpg",
        title: "Black Printed T-Shirt",
        description: "Comfortable and stylish, perfect for everyday wear",
        price: "$150",
        category: "tops",
        product: "black-shirt",
      },
      {
        src: "/pictures/tshirt.jpg",
        title: "White T-Shirt Orange Printed",
        description: "Lightweight and trendy, ideal for summer vibes",
        price: "$250",
        category: "tops",
        product: "white-shirt",
      },
      {
        src: "/pictures/tshirt2.jpg",
        title: "White T-Shirt Black Printed",
        description: "Bold design for those who love creative styles",
        price: "$190",
        category: "tops",
        product: "white-shirt",
      },
      {
        src: "/pictures/coat.jpg",
        title: "Long Sleeve Coat",
        description: "Elegant and warm, ideal for chilly evenings",
        price: "$350",
        category: "tops",
        product: "long-sleeve",
      },
      {
        src: "/pictures/blackshirt.jpg",
        title: "Black T-Shirt White Printed",
        description: "Classic look with a modern touch of comfort",
        price: "$250",
        category: "tops",
        product: "black-white",
      },
      {
        src: "/pictures/redshirt.jpg",
        title: "Red T-Shirt",
        description: "Vibrant and comfy, perfect for casual outings",
        price: "$150",
        category: "tops",
        product: "red-tshirt",
      },
    ];  
    return NextResponse.json({topsells});
}