import React from "react";
import { Link } from "react-router-dom";

function About() {
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
                    <li className="nav-item active">
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

        {/* <!-- about section --> */}

        <section className="about_section layout_padding layout_margin">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>About Us</h2>
                  </div>
                  <p>
                    DTDC is a leading express delivery company in India
                    operating domestically and internationally since 1990. It
                    has a large delivery network covering 10,000 pin codes
                    across India through 300 owned offices and 4000 partner
                    offices. DTDC aims to provide prompt, quality, consistent,
                    accessible, and affordable delivery services tracked via
                    online and SMS updates. Its target markets include banks,
                    manufacturers, e-commerce, students, and professionals.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src="images/about-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end about section --> */}
      </body>
    </>
  );
}

export default About;
