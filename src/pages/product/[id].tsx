import { ImageContainer, ProductDetails,ProductContainer } from "@/styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import useCart from "@/hooks/useCart";
import { Iproducts } from "@/contexts/CartContext";

interface ProductProps {
  product: Iproducts;

}

function Product({product}: ProductProps) {


  const {isFallback} = useRouter();
  const {existProducts,addToCart} = useCart();

  if ( isFallback ) {
    return (
      <p>Loading ...</p>
    )
  }

  const itemAlreadyExists = existProducts(product.id);
 

  return ( 
    <>
    <Head>
      <title>{product.name} | E-commerce</title>
    </Head>
      <ProductContainer>
        <ImageContainer>
        <Image src={product.image} alt={""} width={480} height={520}/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={existProducts(product.id)} onClick={() => addToCart(product)}>{itemAlreadyExists ? "Produto já está no carrinho" : "Colocar no carrinho "}</button>
        </ProductDetails>
      </ProductContainer>
    </>
   );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "prod_Ox3xJy1ZVY3Txt" } }];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps : GetStaticProps<any, {id: string}> = async ({ params }) => {
  
  const { id: productId } = params || {};
  if (!productId) {
    return {
      notFound: true,
    };
  }

  const Product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = Product.default_price as Stripe.Price;

  return {
    props : {
      product: {
        id: Product.id,
        name: Product.name,
        image: Product.images[0],
        price: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format( price.unit_amount ? price.unit_amount / 100 : 0),
        description: Product.description,
        default_price_id: price.id,
        numberPrice: price.unit_amount ? price.unit_amount / 100 : 0,
      }
    },
    revalidate: 60 * 60 * 2 //2 hours
  }
}


export default Product;