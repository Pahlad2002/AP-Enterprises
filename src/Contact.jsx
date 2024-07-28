import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item active">
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

        {/* <!-- contact section --> */}

        <section className="contact_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 offset-md-1">
                <div className="form_container">
                  <div className="heading_container">
                    <h2>Chat with us on WhatsApp!</h2>
                  </div>
                  <form>
                    <img
                      className="QR pb-4"
                      src="https://www.interakt.shop/wp-content/uploads/2023/05/Group-4403-1.webp"
                      alt=""
                    />
                    <img src="" alt="" />
                    <div className="d-flex ">
                      <a className="button" href="https://wa.link/1jxv5h">SEND Message</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 px-0 mt-4">
                <div className="map_container">
                  <div className="map">
                    <img className="QR" src="images/OfficeQR.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end contact section --> */}
      </body>
    </>
  );
}

export default Contact;
