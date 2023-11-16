import { Handbag } from "phosphor-react";
import { ContainerButton } from "./style";
import { MouseEvent } from "react";

type CartButtonProps = {
  color?: "gray" | "green";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function CartButton({ color = "gray", ...rest }: CartButtonProps) {
  return (
    <ContainerButton color={color} {...rest}>
      <Handbag size={24} weight="bold" />
    </ContainerButton>
  );
}

export default CartButton;