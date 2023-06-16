import CardIcon from "../images/credit-card.svg";
import ProductImage from "..src/images/prank.png";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../images/credit-card.svg";
import ProductImage from "..src/images/prank.png";

import "../style.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const items = {
    price: "price_1NJLCJARJgnKdsPK6WwslX7d",
    quantity: 1,
    price: "price_1NJLPRARJgnKdsPKwZHPTt1v",
    quantity: 1,
    price: "price_1NJLRUARJgnKdsPKYn6GmmRT",
    quantity: 1,
    price: "price_1NJLUDARJgnKdsPKnROpXPYM",
    quantity: 1,
    price: "price_1NJLVYARJgnKdsPK6hjiRH93",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Pranksters-Inc</p>
      <p className="checkout-description">
      Web service for pranking your friends
      </p>
      <h1 className="checkout-price">$10.00</h1>
      <img
        className="checkout-prank"
        src={prank.png}
        alt="Product"
      />
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="yellow-circle">
          <div className="red-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;