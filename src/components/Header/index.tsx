import { HeaderContainer } from "./style";
import Image from "next/image";
import logoImage from '@/assets/logo.svg'
import Link from 'next/link'
import Cart from "../Cart";
function Header() {
  return ( 
    <>
    <HeaderContainer>
      <Link href="/">
    <Image src={logoImage} alt="" />
    </Link>
    <Cart />
    </HeaderContainer>
    </>
   );
}

export default Header;