import CartButton from "../CartButton";
import * as Dialog from "@radix-ui/react-dialog";
import { CartClose, CartContent,CartProduct,CartProductImage,CartProductDetails,CartFinalization,FinalizationDetails } from "./style";
import Camisa1 from "../../camisetas/camisa1.png";
import Image from "next/image";
import {X} from "phosphor-react";
function Cart() {
  return ( 
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
            <CartClose>
              <X size={24} weight="bold" />
            </CartClose>

            <h2>Sacola de Compras</h2>

            <section>
              {/* <p>Parece que seu carrinho está vazio: (</p> */}
              <CartProduct>

                <CartProductImage>
                <Image src={Camisa1 } alt="Camisa" width={100} height={93}/>
                </CartProductImage>

              <CartProductDetails>
                <p>Camisa Maratona</p>
                <strong>R$ 129,90</strong>
                <button>Remover</button>
              </CartProductDetails>
              </CartProduct>
            </section>

            <CartFinalization>
              <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100,00</p>
              </div>
              </FinalizationDetails>
            <button>Finalizar Compra</button>
            </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>

   );
}

export default Cart;