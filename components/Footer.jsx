import Link from 'next/link';
import React from 'react'
import { urlFor } from '../pages/lib/sanity';

const Footer = ({footerBanner: {buttonText, desc, discount, image, largeText1, largeText2, midText, product, smallText, saleTime}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p className=''>{discount}</p>
          <h3 className=''>{largeText1}</h3>
          <h3 className=''>{largeText2}</h3>
          <p className=''>{saleTime}</p>
        </div>
        <div className='right'>
          <p className=''>{smallText}</p>
          <h3 className=''>{midText}</h3>
          <p className=''>{desc}</p>
          <Link href={`/product/${product}`}>
              <button type='button'>
                {buttonText}
              </button>
          </Link>
        </div>
        <img 
          src={urlFor(image)}
          className='footer-banner-image'
          alt='picture'
        />
      </div>
    </div>
  )
}

export default Footer;
