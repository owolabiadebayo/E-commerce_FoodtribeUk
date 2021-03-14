import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";
import axios from "./axios";
import { auth } from "./firebase";

function Payment() {
  const [{ loggedinuser, basket }, dispatch] = UseStateValue();
  const [Disabled, setDisabled] = useState(true);
  const [success, setSucceeded] = useState(false);

  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const [hasAccount, setHasAccount] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);
  // console.log("the secret is >>>>", clientSecret);
  const authListener = () => {
    auth.onAuthStateChanged((userauth) => {
      console.log(userauth);
      if (userauth) {
        setHasAccount(true);
      } else {
        setHasAccount(false);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" },
      },
      invalid: {
        iconColor: "#cc171e",
        color: "#cc171e",
      },
    },
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    //  let axiosConfig = {
    //    headers: {
    //      "Content-Type": "application/json;charset=UTF-8",
    //      "Access-Control-Allow-Origin": "*",
    //    },
    //  };

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          `/payments/create?total=${getBasketTotal(basket) * 100}`,
          {
            amount: `${getBasketTotal(basket) * 100}`,
            id,
          }
        );
        if (response.data.success) {
          console.log("successfull payment");
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          history.replace("/orders");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  console.log(success);
  console.log(processing);
  console.log(error);
  console.log(!hasAccount);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <div className="Login">
        <Link>
          <img src="/img/logo.png" className="Login__logo" alt="" />
        </Link>
        <div className="login__container">
          {hasAccount ? <h1>Make Payment</h1> : <h1>Sign Up</h1>}
          <>
            {hasAccount ? (
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} options={CARD_OPTIONS} />{" "}
                <br></br>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h4 className="center">
                        Order total:
                        <strong>{value}</strong>
                      </h4>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <br />
                <button
                  className="btn btn-sm btn-success"
                  disabled={processing || Disabled || success}
                >
                  <span>{processing ? <p>processing</p> : "Buy Now"} </span>
                </button>
                {error && <div> {error} </div>}
              </form>
            ) : (
              <>
                <p>
                  Do you have an account with us? in order to proceed to payment
                </p>
                <p>
                  please Sign-In, you need to agree with foodtribe's terms and
                  condition
                </p>
                <button
                  onClick={(e) => history.push("/Login")}
                  className="login_createAccount"
                >
                  Create Foodtribe Account
                </button>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default Payment;
