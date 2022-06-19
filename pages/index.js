import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import  HeroBanner  from '../components/HeroBanner'
import  Footer  from '../components/Footer'
import {client, urlFor} from './lib/sanity'
import Product from '../components/Product'

export default function Home({products, banner}) {
  console.log("produit",products);
  console.log("banner", banner);
  return (
    <>
      <HeroBanner banner={banner[0]} />

      <div className='products-heading'>
        <h2>Produits les plus vendus</h2>
        <p> Il existe de nombreuses variantes haut-parleur</p>
      </div>

      <div className='products-container'>
        {products && (
          products.map((product) =>( <Product key={product._id} product={product} />))
        )}
      </div>

      <Footer footerBanner={banner[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const queryProduct = "*[_type == 'product']";
  const queryBanner = "*[_type == 'banner']";
  const products = await client.fetch(queryProduct)
  const banner = await client.fetch(queryBanner)
  return {
    props:{products, banner}
  }
}
