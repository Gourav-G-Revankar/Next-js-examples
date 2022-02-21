import Link from 'next/link'

function Blog() {
  return(
    <>
    <h1>Blog Page</h1>
    <Link href="/">
      <a>home</a>
    </Link>
    </>
  )
}

export default Blog