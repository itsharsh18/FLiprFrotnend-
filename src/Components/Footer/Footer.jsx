import React, { useState } from "react";
import logo1 from "../../assets/images/leadGEn/logo.svg";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/newsLetter/newsLetterscene", { email });
      setMessage(response.data.message);
      setEmail(""); // Clear the input field
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div style={{ marginTop: "-84px" }}>
      {/* Top Section - Newsletter and Elements */}
      <section style={{ backgroundColor: "blue" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - 5 elements (Links or Buttons) */}
            <div className="col-lg-7">
              <div className="d-flex justify-content-around">
                <button className="btn btn-light">Home</button>
                <button className="btn btn-light">About Us</button>
                <button className="btn btn-light">Services</button>
                <button className="btn btn-light">Contact</button>
                <button className="btn btn-light">Blog</button>
              </div>
            </div>

            {/* Right side - Newsletter Form */}
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center">
                <h4 style={{ color: "white" }}>Subscribe to Our Newsletter</h4>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "15px",
                  }}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    style={{
                      padding: "10px",
                      borderRadius: "20px",
                      border: "none",
                      outline: "none",
                      width: "70%",
                      marginRight: "10px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
                {message && (
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section
        style={{
          backgroundColor: "rebeccapurple",
          padding: "30px 0",
          position: "relative",
          bottom: "0px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section: Copyright */}
            <div className="col-lg-4">
              <h2 style={{ color: "white" }}>@ All rights reserved</h2>
            </div>

            {/* Center Section: Logo */}
            <div className="col-lg-4 text-center">
              <img src={logo1} alt="Logo" style={{ maxWidth: "150px" }} />
            </div>

            {/* Right Section: Social Media Icons */}
            <div className="col-lg-4 text-center">
              <h3 style={{ color: "white" }}>
                <CiTwitter style={{ margin: "0 10px" }} />
                <FaLinkedin style={{ margin: "0 10px" }} />
                <FaInstagramSquare style={{ margin: "0 10px" }} />
                <FaFacebook style={{ margin: "0 10px" }} />
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
