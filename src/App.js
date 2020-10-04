import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Payment from "./components/payment/Payment"
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";

import { useStateValue } from "./contextAPI/StatePovider";

import { auth } from "./firebase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HYNnOBOfmmNGtojIEQspcbpMTgZIkLp3RMx8C4x1zVT7a39J8mcU9mbb8uOt7M8Ye5Pm0YrQm9ZP3cMhKeq7OQJ00N45nMAaA');

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<<<<<< POWERFUL
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}> 
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
