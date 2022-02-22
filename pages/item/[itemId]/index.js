// 4) Nested Dynamic Routes

import { useRouter } from 'next/router'

function Item() {

  const Router = useRouter()
  const ItemId = Router.query.itemId

  return(
    <h1>Item number {ItemId}</h1>
  )
}

export default Item