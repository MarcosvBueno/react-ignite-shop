import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Stripe from "stripe";
import Image from "next/image";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    image: string;
  }
}

function Success({customerName, product}: SuccessProps) {
  return ( <>
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <ImageContainer>
      <Image src={product.image} alt={""} width={120} height={110}/>
      </ImageContainer>
      <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  </> );
}



export const getServerSideProps: GetServerSideProps = async ({query}) => {

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props:{
      customerName,
      product : {
        name: product.name,
        image: product.images[0],
      }
    }
  }

}

export default Success;