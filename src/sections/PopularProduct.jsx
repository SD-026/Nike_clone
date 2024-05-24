// import React from 'react'
import { products } from "../contsnts" 
import ProductCard from "../components/ProductCard"
// import PopularProduct from './PopularProduct';
const PopularProduct = () => {
  return (
    <section id="productst" className="max-container max-sm:mt-12 ">

    {/* <Text section */}

     <div className="flex flex-col justify-start gap-5 ">

      <h2 className="text-4xl font-palanquin font-bold ">
        Our <span className="text-coral-red">Popular</span> Product
      </h2>
      <p className="text-slate-grey lg:max-w-lg mt-2 font-montserrat ">
      Experience top-notch quality and style with our sought-after
      selections. Discover a world of comfort, design, and value
      </p>
     </div>

     {/* <Product section */}

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
      {products.map((product) =>(
        <ProductCard  key={product.name} {...product}/>
      ))}

      </div>

    
    </section>
  )
}

export default PopularProduct
