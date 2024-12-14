import React from 'react';
import logo1 from "../../assets/images/leadGEn/Ellipse11.svg"
import logo2 from "../../assets/images/leadGEn/Ellipse12.svg"
import logo3 from "../../assets/images/leadGEn/Ellipse13.svg"

const Secnd = () => {
  return (
    <div>
      <div className="row" style={{ marginTop: "2px", paddingLeft: "20px" , position:'relative' , top:"50px"}}>
        <div className="col-lg-4">
          <h3 style={{ color: "lightblue", textAlign: 'center' }}>Not Your Average Realtor</h3>
          <h6 style={{ textAlign: 'initial', textJustify: 'inter-word' }}>
            The best real estate property where you can find is at @Real Trust because we don't sell the properties, we sell the dreams of your house for you and for your loved ones where you can enjoy, live, and cherish your life. This is all about @RealTest, a place where we don't sell you a product, we sell you your dreams.
          </h6>
          
        </div>

        <div className="col-lg-8" style={{ paddingLeft: "20%" }}>
          <div>
            <img src={logo1} alt="" style={{ width: "25%" }} />
            <br />
            <img src={logo2} alt="" style={{ width: "30%" }} />
            <img src={logo3} alt="" style={{ width: "25%", position: 'relative', bottom: "175px" }} />
            
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Secnd;




