import { ImageContainer, ProductDetails,ProductContainer } from "@/styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    default_price_id: string;
  }

}

function Product({product}: ProductProps) {

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const {isFallback} = useRouter();

  if ( isFallback ) {
    return (
      <p>Loading ...</p>
    )
  }
   
  async function handleBuy() {
    try {

      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId : product.default_price_id,
      })

      const {checkoutUrl} = response.data;
     

      window.location.href = checkoutUrl;
      
    } catch (error) {
      
      alert("Falha ao redirecionar para o pagamento");
      console.log(product.default_price_id)
      setIsCreatingCheckoutSession(false);
    }
  }

  return ( 
    <>
      <ProductContainer>
        <ImageContainer>
        <Image src={product.image} alt={""} width={480} height={520}/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuy}>Comprar Agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
   );
}


export const getStaticPaths : GetStaticPaths = async () => {

  //Buscar os produtos mais vendidos / mais acessados / mais visitados

  return {
    paths: [
      { params: {id: 'prod_Ox3xJy1ZVY3Txt'} }
    ],
    fallback: true
    
  }

}

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
      }
    },
    revalidate: 60 * 60 * 2 //2 hours
  }
}


export default Product;