import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import CountryItem from './CountryItem';
import { useEffect } from 'react';


const CountryList = () => {
    const [countries, setCountries]=useState([]);
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>setCountries(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
   <div className="container">
     <div className='row g-4'>
     {
    countries? countries.map(country=>{
        return(
          <CountryItem country={country}/>
        )
      }):'is Loading'
     }
    </div>
    
   </div>
  )
}

export default CountryList