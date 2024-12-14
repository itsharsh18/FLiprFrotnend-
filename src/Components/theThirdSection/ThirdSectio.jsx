import React from 'react';

import logo4 from "../../assets/images/leadGEn/pexels-brett-sayles-2881232-1.svg";
import logo5 from "../../assets/images/leadGEn/pexels-fauxels-3182834.svg";
import logo6 from "../../assets/images/leadGEn/third2.svg";
import ChooseUsSection from '../chooseUs/ChooseUsSection';

const ThirdSectio = () => {
  return (
    <div>
      <ChooseUsSection />
      <div style={{ marginTop: "50px" }}>
  <img
    src={logo4}
    alt=""
    style={{
      position: "relative",
      left: "35%",
      width: "10%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "5px",
      boxSizing: "border-box",
    }}
  />
  <br />

  <img
    src={logo6}
    alt=""
    style={{
      position: "relative",
      left: "45%",
      width: "20%",
      marginLeft: "25px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "5px",
      boxSizing: "border-box",
    }}
  />
  <br />

  <img
    src={logo5}
    alt=""
    style={{
      position: "relative",
      left: "65%",
      top: "-175px",
      width: "15%",
      marginLeft: "50px",
      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.2)",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "5px",
      boxSizing: "border-box",
    }}
  />
</div>


      <h4
        style={{
          textAlign: 'center',
          color: 'blue',
          textDecoration: 'underline',
          textShadow: '2px 2px black',
          fontWeight: '800',
          marginTop: '10px',
        }}
      >
        About Us
      </h4>

      <p
        style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '10px',
          color: '#333',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '400',
          letterSpacing: '0.5px',
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur, reprehenderit veritatis
        neque deleniti repellat enim debitis, quae voluptates illum quia sequi modi, dolores ratione! Cum necessitatibus
        natus expedita dolores?
      </p>
    </div>
  );
};

export default ThirdSectio;
