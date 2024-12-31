"use client"
import Image from 'next/image'
import React, { useState } from 'react'

/**React state ka use karke hum UI ko user ke interaction ke mutabiq
  dynamically update kar sakte hain.
  Jab user kisi thumbnail par click karega, tou humein main image ko change karna hai.
  Iska matlab hai ki main image ka src dynamically change hoga based on user interaction.
  React state humein isi dynamic behavior ko manage karne ka asaan aur effective tareeqa deti hai.
  */

//image swapping component
const SlugComponent = () => {

   // State to manage main image path onclick pay path update hoga  
  const[path, setPath] = useState("");


  return (
    <div>
      <Image
        src={path ? path:"/pictures/tshirt1.jpg"}
        alt="product"
        width={400}
        height={400}
      />

      {/**Thumbnails (choti image jo main images kay neechay dikhrhein) par click karte
       hi main image ka badalna ek common * aur user-friendly feature hai jo UX ko better banata hai. */}
      <div className='flex items-center justify-evenly mt-2'>
        <div className='cursor-pointer'>
          <Image
           src={"/pictures/tshirt1.jpg"}
           alt="product"
           width={60}
           height={60}
           onClick={() => {setPath("/pictures/tshirt1.jpg")}}
        />
       </div>
       <div className='cursor-pointer'>
          <Image
           src={"/pictures/tshirt.jpg"}
           alt="product"
           width={60}
           height={60}
           onClick={() => {setPath("/pictures/tshirt.jpg")}}
        />
       </div>
       <div className='cursor-pointer'>
          <Image
           src={"/pictures/coat.jpg"}
           alt="product"
           width={60}
           height={60}
           onClick={() => {setPath("/pictures/coat.jpg")}}
        />
       </div>
      </div>
    </div>
  );
}

export default SlugComponent
