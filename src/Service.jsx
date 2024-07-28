import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

function Service() {
  return (
    <>
      <body className="sub_page">
        <div className="hero_area">
          {/* <!-- header section strats --> */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <img className="logoImg" src="images/ap_logo.jpg" alt="" />
                  <span className="logoN">AP ENTERPRISES</span>
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ">
                    <li className="nav-item ">
                      <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        {" "}
                        About
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="quote_btn-container">
                    <a href="https://wa.link/1jxv5h">
                      <img
                        className="wh-logo"
                        src="images/whats_logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* <!-- end header section --> */}
        </div>

        {/* <!-- service section --> */}
        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Our Services</h2>
              <p>
              These rates are applicable upto 2Kgs only.
              </p>
            </div>
            <Table />
            <div className="btn-box">
              <a href="">View More</a>
            </div>
          </div>
        </section>
        {/* <!-- end service section --> */}
      </body>
    </>
  );
}

export default Service;
