import React from 'react'
import "./Price.css"

const Price = ({price}) => {

  let {oldPrice, newPrice} = price;

  return (
    <div className='Price'>
      <p style={{textDecoration: 'line-through'}}>{price.oldPrice}</p>
      <p style={{fontWeight : 'bold'}}>{price.newPrice}</p>
    </div>
  )
}

export default Price
