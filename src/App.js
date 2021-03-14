import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Payment from "./Payment";
import { auth } from "./firebase";
import { UseStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IO9Z2KK8jUCrbVrBFG6XgdNOkH90ykrKnateJQj3FYoWh0scYR6kLJ18bBelz5GgGqOEGzkAQlj7UMVLaaQbbIA00sI38DQJB"
);
function App() {
  const [{ basket, loggedinuser }, dispatch] = UseStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      console.log(userauth);
      if (userauth) {
        dispatch({ type: "SET_LOGIN", loggedinuser: userauth });
      } else {
        dispatch({
          type: "SET_LOGIN",
          loggedinuser: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

            <Footer />
          </Route>
          <Route path="/" exact>
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
