import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__link">
        <button className="amazon">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="5% discount deal"
          >
            Today's deal
          </span>
        </button>
        <button className="amazon">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="+2347060820796"
          >
            Customer Service
          </span>
        </button>
        <button className="amazon">
          <span>Return & order</span>
        </button>
        <button className="amazon">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="open soon"
          >
            Sell
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar
