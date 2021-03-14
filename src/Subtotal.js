import React,{useState} from 'react'
import CurrencyFormat from 'react-currency-format'
import { UseStateValue } from './StateProvider'
import {getBasketTotal} from './reducer';
import {useHistory,Link} from 'react-router-dom'



function SubTotal () {
  const [{ basket }, dispatch] = UseStateValue();
  const history = useHistory();
const [username, setUserName] = useState();
const [useraddress, setUserAddress] = useState();
const [usercontactdetails, setUserDetails] = useState();
const [hasAccount, setHasAccount] = useState(true);
  return (
    <div
      className="subtotal"
      style={{
        background: "#232353",
        color: "#ffffff",
        boxShadow: "#ddd 0 5px",
        borderRadius: "10px",
      }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="center">
              (Subtotal {basket?.lenght} items): <strong>{value}</strong>
            </h3>
            <small>
              {" "}
              <input className="center" type="checkbox" /> This order contains a
              gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <div className="subtotal">
        <div
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start active"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Delivery address</h5>
            <small>Checklist {basket?.length} item</small>
          </div>
          <form>
            <label>
              {" "}
              Delivery Address: <br></br>
              <input
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                type="text"
                className="mb-1 W-100"
              />
            </label>
            <br />
            <label>
              Contact Number:<br></br>
              <input
                value={usercontactdetails}
                onChange={(event) => setUserDetails(event.target.value)}
                type="text"
                className="mb-1"
              />
            </label>
            <br></br>
          </form>
          <Link to="/Payment">
            {" "}
            <button
              value="Proceed to payment"
              className="btn btn-success btn-sm"
              onClick={() => setHasAccount(!hasAccount)}
            >
              Proceed to payment{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubTotal
