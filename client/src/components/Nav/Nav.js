import React from 'react'
import './Nav.css'
import { Container } from 'react-bootstrap'
import search from '../../assets/svg/loupe.svg'
import cart from '../../assets/svg/shopping-cart.svg'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
      <div className="nav-container">
        <Link to="/" className="header">
          animazon<span>.com</span>
        </Link>
        <div className="nav-delivery-info-container">
          <p>Deliver to Laith</p>
          <h2>432 Park Avenue</h2>
        </div>
        <div className="nav-input-container">
          <select>
            <option>All</option>
          </select>
          <input />
          <button className="nav-btn">
            <img src={search} />
          </button>
        </div>
        <div className="nav-delivery-info-container">
          <button>
            <Link to="/form">Add New Animal</Link>
          </button>
        </div>
        <div className="nav-cart-container">
          <img src={cart} />
          <h2>cart</h2>
        </div>
      </div>
    </div>
  )
}
