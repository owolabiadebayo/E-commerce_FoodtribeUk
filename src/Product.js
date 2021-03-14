import React from "react";
import "./Product.css";
import { TiShoppingCart } from "react-icons/ti";
import { UseStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating, overview }) {
  const [{ basket }, dispatch] = UseStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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

        <div className="Product-overview">
          <h2>overview</h2>
          <p>{overview}</p>
        </div>
      </div>
      <div className="cart1">
        <button>
          <a  className="icon" onClick={addToBasket}>
            Add to Cart
            <TiShoppingCart size={35} />
          </a>
        </button>
      </div>
    </>
  );
}
