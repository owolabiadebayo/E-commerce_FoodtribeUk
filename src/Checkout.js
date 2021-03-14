import React, {useState} from 'react'
import './Checkout.css'
import {UseStateValue} from './StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'
import {usehistory} from 'react'

function Checkout() {
  const [{basket}] = UseStateValue();
  
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6">
          {basket.length === 0 ? (
            <div>
              <h2 className="shoppingCart fst-italic fw-bolder">
                Your Shopping Cart is empty.
              </h2>
              <p>You have no items in your basket. Buy one</p>
            </div>
          ) : (
            <div>
              <h3 className="shopCart fw-bold">Items in the shopping basket</h3>
              {basket.map((item) => (
                <ProductCart
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>

        <div className="col-md-4  offset-2 col-xl-4 col-lg-4 col-sm-4">
          
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout
