import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer_container">
        {/* <!-- info section --> */}

        <section className="info_section ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <div className="info_detail">
                  <h4>
                    {" "}
                    <a className="navbar-brand" href="index.html">
                      <img
                        className="logoImg"
                        src="images/ap_logo.jpg"
                        alt=""
                      />
                      <span className="logoN">AP ENTERPRISES</span>
                    </a>
                  </h4>
                  <p>
                    send Rakhi and goodies to your siblings across India and
                    avail attractive discounts.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mx-auto">
                <div className="info_link_box">
                  <h4>Links</h4>
                  <div className="info_links">
                    <Link className="" to="/">
                      Home
                    </Link>
                    <Link className="" to="/about">
                      About
                    </Link>
                    <Link className="" to="/service">
                      Services
                    </Link>
                    <Link className="" to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <h4>Subscribe</h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div className="col-md-6 col-lg-3 mb-0 ml-auto">
                <div className="info_contact">
                  <h4>Address</h4>
                  <div className="contact_link_box">
                    <a href="https://www.google.com/maps/dir//Shop+No.+3,+DTDC+COURIER+BOISAR+ANIKET,+Vrindavan+Complex,+Mahadev+Nagar,+Chillar+Road,+near+Shushila+Bar,+Boisar,+Maharashtra+401501/@19.7849724,72.754869,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be71fd4e1c66e0f:0x91bf4afe063d4828!2m2!1d72.7669296!2d19.7849718?entry=ttu">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Shop No.3, Mahadev Nagar Virndavan Complex, Nr.Sushila
                        Bar, Boisar E, Dist.Palghar-401501
                      </span>
                    </a>
                    <a>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Office +91 7709976770</span>
                    </a>
                    <a>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Mr.Aniket Rai +91 9766210025</span>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>aniketrai650@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div className="info_social">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end info section --> */}

        {/* <!-- footer section --> */}
        <footer className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">
                {" "}
                AP enterprises with DTDC Express 2024
              </a>
            </p>
          </div>
        </footer>
        {/* <!-- footer section --> */}
      </div>
    </>
  );
}

export default Footer;
