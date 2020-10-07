import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../contextAPI/reducer";
import { useStateValue } from "../../contextAPI/StatePovider";

import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ user, basket }] = useStateValue();

  return (
    <div className="subtotal">
      {/* Price */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {!user ? (
        <button onClick={(e) => history.push("/login")}>
          Proceed to Checkout
        </button>
      ) : (
        <button onClick={(e) => history.push("/payment")}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
