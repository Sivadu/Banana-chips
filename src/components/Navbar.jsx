import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  // Collapse navbar on link click (for mobile)
  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '55px', width: 'auto', marginRight: '10px' }}
          />
          <span className="fw-bold fs-4 text-dark">Company Name</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/" onClick={handleNavLinkClick}>HOME</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/categories" onClick={handleNavLinkClick}>FLAVOURS</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/categories" onClick={handleNavLinkClick}>CATEGORIES</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/ourstory" onClick={handleNavLinkClick}>OUR STORY</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/contact" onClick={handleNavLinkClick}>CONTACT</Link>
            </li>

            {/* Order Button */}
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
