import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
    <Link to='/'>Back to Home</Link>
    
    </div>
  )
}

export default Detail