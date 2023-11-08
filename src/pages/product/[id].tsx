import { ImageContainer, ProductDetails,ProductContainer } from "@/styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";

interface ProductProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
  }

}

function Product({product}: ProductProps) {
  const {isFallback} = useRouter();

  if ( isFallback ) {
    return (
      <p>Loading ...</p>
    )
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

          <button>Comprar Agora</button>
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
      }
    },
    revalidate: 60 * 60 * 2 //2 hours
  }
}


export default Product;