import { HomeContainer, Product } from "@/styles/pages/home";
import Head from "next/head";
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Image from 'next/image'
import Link from "next/link";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps, } from "next";
import CartButton from "@/components/CartButton";
import useCart from "@/hooks/useCart";
import { Iproducts } from "@/contexts/CartContext";
import {MouseEvent} from "react";

interface HomeProps {
  products : Iproducts[];

}[]

export default function Home({products}: HomeProps) {

  const {addToCart,existProducts} = useCart();

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: Iproducts) {
    e.preventDefault();
    addToCart(product);
  }
  
  
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
    <Head>
      <title>Home | E-commerce</title>
    </Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
    {products.map((product) => {
      return (
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
        <Product className="keen-slider__slide">
          <Image src={product.image} alt={""} width={480} height={520}/>
          <footer>
            <div>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
            </div>
          <CartButton color="green" onClick={(e) => handleAddToCart(e, product)} disabled={existProducts(product.id)}/>
          </footer>
        </Product>
        </Link>          
      )
    })}
    </HomeContainer>
    </>
  

)}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id : product.id,
      name: product.name,
      image: product.images[0],
      price: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format( price.unit_amount ? price.unit_amount / 100 : 0),
      numberPrice: price.unit_amount ? price.unit_amount / 100 : 0,
      defaultPriceId: price.id,
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}