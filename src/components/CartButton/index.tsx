import { Handbag } from "phosphor-react";
import { ContainerButton } from "./style";

type CartButtonProps = {
  color?: "gray" | "green";
}

function CartButton({ color = "gray", ...rest }: CartButtonProps) {
  return (
    <ContainerButton color={color} {...rest}>
      <Handbag size={24} weight="bold" />
    </ContainerButton>
  );
}

export default CartButton;