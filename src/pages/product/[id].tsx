import { useRouter } from "next/router";


function Product() {
  const router = useRouter();

  return ( 
    <>
      <h1>page product: {router.query.id}</h1>
    </>
   );
}

export default Product;