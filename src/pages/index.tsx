import { HomeContainer, Product } from "@/styles/pages/home";

import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Image from 'next/image'

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface HomeProps {
  products : any;
  id: string;
  name: string;
  image: string;
  price: number;

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
        <Product className="keen-slider__slide" key={product.id}>
          <Image src={product.image} alt={""} width={480} height={520}/>
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>          
      )
    })}
    </HomeContainer>
  
  

)}

export const getServerSideProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id : product.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
    }
  });

  return {
    props: {
      products
    }
  }
}