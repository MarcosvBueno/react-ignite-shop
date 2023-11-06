import { ImageContainer, ProductDetails,ProductContainer } from "@/styles/pages/product";
import { useRouter } from "next/router";


function Product() {
  const router = useRouter();

  return ( 
    <>
      <ProductContainer>
        <ImageContainer>

        </ImageContainer>
        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta neque ipsum autem blanditiis ab eius labore adipisci minus aspernatur aperiam ullam velit, fugiat ut impedit modi explicabo est. Quae.</p>

          <button>Comprar Agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
   );
}

export default Product;