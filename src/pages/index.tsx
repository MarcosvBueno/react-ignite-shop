import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'
import camisa1 from '@/camisetas/camisa1.png'
import camisa2 from '@/camisetas/camisa2.png'
import camisa3 from '@/camisetas/camisa3.png'


export default function Home() {
  return (
    <>
    <HomeContainer>

      <Product>
        <Image src={camisa1} alt={""} width={480} height={520}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisa2} alt={""} width={480} height={520}/>
        
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
    </HomeContainer>
    </>
  )
}
