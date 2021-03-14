import React from 'react'
import './ProductCart.css'
import { TiShoppingCart } from "react-icons/ti";
import {UseStateValue} from './StateProvider'
function ProductCart({id,title,image,price,rating}) {
  const [{basket}, dispatch] = UseStateValue()
const removeItem =() => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    id: id
  })
}
  return (
    <>
    <div className="product">
        <img className="homeimg" src={image} alt="{title}" />
        <div className="product__info">
          <h6>{title}</h6>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <span className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </span>
        </div>

        
      </div>
      
        <button>
          <a href className="icon" onClick={removeItem}>
            Remove from cart
            <TiShoppingCart size={35} />
          </a>
        </button>

      </>
  )
}

export default ProductCart
