import React from "react";
import "./Product.css";
import { TiShoppingCart } from "react-icons/ti";
import { UseStateValue } from "./StateProvider";

export default function Product2({
  id,
  title,
  image,
  price,
  rating,
  overview,
}) {
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
    <div className="card">
      <div className="media media-2x1 gd-primary">
        {" "}
        <img className="profile-image" src={image} alt="#" />{" "}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">
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
      <div className="cart1">
        <button>
          <a  className="icon" onClick={addToBasket}>
            Add to Cart
            <TiShoppingCart size={35} />
          </a>
        </button>
      </div>
    </div>
  );
}
