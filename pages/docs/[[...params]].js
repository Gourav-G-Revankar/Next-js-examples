// 5) Catch All Routes

import {useRouter} from 'next/router'

function Doc() {

  const Router = useRouter()

  const { params = [] } = Router.query

  if (params.length ===2) {
    return(
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]} 
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  }


  return (
    <h1>Doc Home Page</h1>
  )
}

export default Doc