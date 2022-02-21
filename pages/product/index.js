import Link from 'next/link'

function Product( {productId = 100} ) {
  return (
    <>
      <h1>Product Page</h1>

      <Link href={`product/${productId}`}>
        <a>product 100</a>
      </Link>
    </>
  )
}

export default Product