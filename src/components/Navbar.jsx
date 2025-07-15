import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3 fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '55px', width: 'auto', marginRight: '10px' }}
          />
          <span className="fw-bold fs-4 text-dark">Company Name</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {["Home", "Flavours", "Categories", "Our Story", "Contact"].map((item) => (
              <li className="nav-item mx-2" key={item}>
                <a
                  className="nav-link custom-link fw-semibold text-dark"
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
            <li className="nav-item ms-3">
              <button className="btn btn-warning text-white fw-semibold d-flex align-items-center">
                <i className="bi bi-cart3 me-2"></i>Order Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
