import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = (props) => {
  const { country } = props
  const { name, flags, population, capital, region } = country
  return (
    <div className="col-lg-3">
     <Link to={`/detail/${name.common}`}>
     <div className="card">
        <img className="card-img-top" src={flags.png} alt={flags.alt} />
        <div className="card-body">
          <h2 className="card-title">{name.common}</h2>
          <p>Population:{population}</p>
          <p>Regioin:{region}</p>
          <p>Capital:{capital}</p>
        </div>
      </div>
      </Link>
    </div>

  )
}

export default CountryItem