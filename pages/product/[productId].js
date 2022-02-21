import { useRouter } from 'next/router'

function Product() {

  const Router = useRouter()
  const productId = Router.query.productId

  return(
    <h1>Product number {productId}</h1>
  )
}

export default Product