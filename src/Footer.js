import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <>
      <div
        className="container-fluid "
        style={{ backgroundColor: "#232f3e", color: "#fff" }}
      >
        <div className="Footerarea">
          <div className="container">
            <div className="footer-links row">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                <div className=" text-center justify-content-items">
                  <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                <div className=" text-center justify-content-items">
                  <h2>About Us</h2>
                  <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                    Jumia is Nigeria's number one online shopping destination
                    where you can shop the widest selection of goods
                    and have them shipped directly to your home or office at
                    your convenience! We offer free nationwide delivery, free
                    returns and have several convenient payment options to
                    choose from, either with your debit/credit cards or cash on
                    delivery. 
                    Happy shopping!
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                <div className="text-center">
                  <h2>Contact</h2>
                  <div className="contact_us">
                    <ImLocation2 size={26} color="#fff" /> Address: Block B2,
                    WAEC Building, Maitama, Abuja.
                  </div>

                  <div className="contact_us">
                    <MdPhoneIphone size={26} color="#fff" /> +2348160197959 |
                    +2348032745058
                  </div>
                  <div className="contact_us">
                    <MdEmail size={26} color="#fff" /> contact@gmtsoftware.tech
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="container">
            <div className="row d-flex">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-4">
                <Link to="/">
                  <img
                    src="./lg.png"
                    className="img-fluid align-self"
                    alt="logo"
                    style={{ width: "40%" }}
                  />
                </Link>
              </div>
              <small className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-4 h5">
                GMTsoftware © 2021
              </small>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center my-4">
                <div className="d-flex justify-content-center align-items-center">
                  <Link
                    className="m-2"
                    to={"//www.facebook.com/GmtsoftwareNG"}
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={30} color="#fff" />
                  </Link>
                  <Link
                    className="m-2"
                    to={"//www.instagram.com/thegmtsoftware/"}
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={30} color="#fff" />
                  </Link>
                  <Link
                    className="m-2"
                    to={"//"}
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube size={30} color="#fff" />
                  </Link>
                  <Link
                    className="m-2"
                    to={"//www.twitter.com/GMTsoftware"}
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={30} color="#fff" />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to={
                      "//www.linkedin.com/company/greatmind-tech-and-software-solutions/"
                    }
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={30} color="#fff" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
