import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

function Header() {
  return (
    <>
      <body>
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
                    <li className="nav-item active">
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
          {/* <!-- slider section --> */}
          <section className="slider_section ">
            <div
              id="customCarousel1"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="img-box">
                          <img src="images/offersDtdc.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            Raksha Bandhan special Offers for You{" "}
                            <span className="pred">20% OFF</span>{" "}
                          </h1>
                          <p>
                            Time to Celebrate the sibling bond just few days
                            away.
                          </p>
                          <div className="btn-box">
                            <a href="https://wa.link/1jxv5h" className="btn1">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="img-box">
                          <img
                            src="https://www.shiprocket.in/wp-content/uploads/2023/04/dtdcBanner.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>DTDC Delivering Value</h1>
                          <p>
                            EXPRESSS PARCELS &nbsp; || &nbsp; INTERNATIONAL
                            &nbsp; || &nbsp; E-COMMERCE
                            <p>
                              <b>
                                FREE <span className="pred"> PICKUPS</span> &{" "}
                                <span className="pred">DELIVERY</span>
                              </b>
                            </p>
                          </p>
                          <p>
                            Your trust is as important to us as your parcels
                          </p>
                          <div className="btn-box">
                            <a href="https://wa.link/1jxv5h" className="btn1">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="img-box">
                          <img src="images/offersDtdc2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            SHIP <span className="hd">RAKHI</span> &{" "}
                            <span className="hd">GIFT'S</span> To Your loved
                            Ones
                          </h1>
                          <p>
                            No matter the distance, we understand the bond of
                            love between siblings.s Bringing Rakhi to Your
                            doorstep.
                            <p className="pred">
                              <b>#Har DilkeDarwaze Tak with DTDC</b>
                            </p>
                          </p>
                          <div className="btn-box">
                            <a href="https://wa.link/1jxv5h" className="btn1">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </section>
          {/* <!-- end slider section --> */}
        </div>
        {/* <!-- service section --> */}
        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Our Services</h2>
              <p>These rates are applicable upto 2Kgs only.</p>
            </div>

            <Table />

            <div className="btn-box">
              <a href="">View More</a>
            </div>
          </div>
        </section>
        {/* <!-- end service section --> */}
        {/* <!-- about section --> */}
        <section className="about_section layout_padding">
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
        {/* <!-- case section --> */}s{/* <!-- end case section --> */}
        {/* <!-- client section --> */}
        <section className="client_section ">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Testimonial</h2>
            </div>
          </div>
          <div
            id="customCarousel2"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="box">
                        <div className="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                          <div className="client_info">
                            <div className="client_name">
                              <h5>Morojink</h5>
                              <h6>Customer</h6>
                            </div>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel2"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel2" data-slide-to="1"></li>
              <li data-target="#customCarousel2" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
        {/* <!-- end client section --> */}
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
                      <a className="button" href="https://wa.link/1jxv5h">
                        SEND Message
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 px-0">
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

export default Header;
