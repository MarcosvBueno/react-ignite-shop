import { HomeContainer, Product } from "@/styles/pages/home";

import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Image from 'next/image'
import Link from "next/link";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps, } from "next";

interface HomeProps {
  products : any;
  id: string;
  name: string;
  image: string;
  price: string;

}[]

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
    {products.map((product: HomeProps) => {
      return (
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
        <Product className="keen-slider__slide">
          <Image src={product.image} alt={""} width={480} height={520}/>
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
        </Link>          
      )
    })}
    </HomeContainer>
  
  

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
      
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}