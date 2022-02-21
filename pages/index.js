import Link from 'next/link'  
import { useRouter } from 'next/router'

function Home() {

  const Router = useRouter()

  const handleEvent = () => {
    Router.push('/product')
  }

  return(
    <>
    <h1>Home</h1>
    <Link href='/blog'>
      <a>blog</a>
    </Link>
    <button onClick={handleEvent}>place order</button>
    </>
  )
}

export default Home