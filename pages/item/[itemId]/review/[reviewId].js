import { useRouter } from 'next/router'

function Review() {

  const Router = useRouter()
  const { reviewId , itemId } = Router.query

  return(
    <h1>Review number {reviewId} <br />
    Item Number {itemId} </h1>
  )
}

export default Review