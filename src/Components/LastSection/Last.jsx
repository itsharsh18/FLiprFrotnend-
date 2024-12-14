import React from 'react';
import logo1 from '../../assets/images/leadGEn/Rectangle.svg';

const Last = () => {
  return (
    <div>

      <div
        style={{
          backgroundImage: `url(${logo1})`,  
          backgroundSize: 'cover',           
          backgroundPosition: 'center',      
          width: '100%',                     
          height: '300px',     
          filter:'brightness(0.4)'
        }}
      >
      </div>

      <h2 style={{position:'relative' , bottom:"150px" , color:'white' , textAlign:'center'}}>Learn More about listing process , <br /> as well as our additional stayling and design work.</h2>
    </div>
  );
};

export default Last;
