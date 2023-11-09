import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

function Success() {
  return ( <>
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <ImageContainer>

      </ImageContainer>
      <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong>compra de 3 camisetas</strong> já está a caminho da sua casa. </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  </> );
}

export default Success;