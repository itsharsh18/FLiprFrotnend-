import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/getTestimonials');
        setTestimonials(response.data.theTestimonialsData);
        setLoading(false);
      } catch (err) {
        setError('Error fetching testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-4" style={{ color: 'blue', fontWeight: '800' }}>Client Testimonials</h2>

      {loading ? (
        <p>Loading testimonials...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card">
                <img
                  src={testimonial.image}
                  className="card-img-top rounded-circle mx-auto d-block"
                  alt={testimonial.Name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{testimonial.Name}</h5>
                  <p className="card-text">{testimonial.Description}</p>
                  <p className="card-text"><strong>{testimonial.Desigation}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
