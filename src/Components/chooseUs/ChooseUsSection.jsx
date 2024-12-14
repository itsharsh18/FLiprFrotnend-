import React from 'react';
import logo1 from '../../assets/images/LeadGenE/home.svg';
import logo2 from '../../assets/images/LeadGenE/paintbrush-2.svg';
import logo3 from '../../assets/images/LeadGenE/circle-dollar-sign.svg';
const ChooseUsSection = () => {
  return (
    <div>
      <h2
        style={{
          color: 'blue',
          textDecoration: 'underline',
          textAlign: 'center',
          marginTop: '50px',
          fontWeight: 'bold',
        }}
      >
        Why Choose Us?
      </h2>

      {/* Cards Section */}
      <div className="row" style={{ marginTop: '30px', justifyContent: 'center' }}>
        {/* First Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div
            style={{
              width: '80%',
              borderRadius: '8px',
              overflow: 'hidden', // Ensures rounded corners for images
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src={logo1}
              alt="Image 1"
              style={{
                width: '50%',
                borderRadius: '8px',
                maxHeight: '200px', // Makes the image smaller
                objectFit: 'cover', // Ensures the image covers the space proportionally
              }}
            />
            <div style={{ paddingTop: '10px' }}>
              <p
                style={{
                  fontSize: '14px',
                  color: '#333',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div
            style={{
              width: '80%',
              borderRadius: '8px',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src={logo2}
              alt="Image 2"
              style={{
                width: '50%',
                borderRadius: '8px',
                maxHeight: '200px',
                objectFit: 'cover',
              }}
            />
            <div style={{ paddingTop: '10px' }}>
              <p
                style={{
                  fontSize: '14px',
                  color: '#333',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div
            style={{
              width: '80%',
              borderRadius: '8px',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src={logo3}
              alt="Image 3"
              style={{
                width: '50%',
                borderRadius: '8px',
                maxHeight: '200px',
                objectFit: 'cover',
              }}
            />
            <div style={{ paddingTop: '10px' }}>
              <p
                style={{
                  fontSize: '14px',
                  color: '#333',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
