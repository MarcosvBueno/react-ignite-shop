import CartButton from '../CartButton';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CartClose,
  CartContent,
  CartProduct,
  CartProductImage,
  CartProductDetails,
  CartFinalization,
  FinalizationDetails
} from './style';
import Camisa1 from '../../camisetas/camisa1.png';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
import useCart from '@/hooks/useCart';
import { Product } from '@/styles/pages/home';
import axios from 'axios';


function Cart() {
  const { cartItems , removeFromCart ,priceTotal} = useCart();
  const cartQuantity = cartItems.length;
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const formatTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(priceTotal);


    async function handleCheckout() {
    try {

      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        products: cartItems,
        
      }
      );
      console.log(response);
      console.log(response.data)  

      const { checkoutUrl } = response.data;
      console.log(checkoutUrl);

      window.location.href = checkoutUrl;
      
    } catch (error) {
      console.error(error); 
      alert("falha ao redirecionar para o checkout");
      setIsCreatingCheckoutSession(false);
    }
    
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton color="gray" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de Compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio: (</p>}

            {cartItems.map(product => (
              <CartProduct key={product.id}>
                <CartProductImage>
                  <Image src={product.image} alt="Camisa" width={100} height={93} />
                </CartProductImage>

                <CartProductDetails>
                  <p>{product.name}</p>
                  <strong>{product.price}</strong>
                  <button onClick={() => removeFromCart(product.id)}>Remover</button>
                </CartProductDetails>
              </CartProduct>

            ))}
            
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartQuantity} {cartQuantity === 1 ? "item" : "itens"}</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formatTotalPrice}</p>
              </div>
            </FinalizationDetails>
            <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartQuantity <= 0 }>Finalizar Compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Cart;
