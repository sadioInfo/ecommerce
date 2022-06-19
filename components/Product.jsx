import Link from 'next/link'
import React from 'react'
import { urlFor } from '../pages/lib/sanity'

const Product = ({product:{image, name, details, price, slug}}) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0])} 
            alt="picture"
            className='product-image' 
            width={250}
            height={250}
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price} GNF</p>
        </div>
      </Link>
    </div>
  )
}
export default Product
