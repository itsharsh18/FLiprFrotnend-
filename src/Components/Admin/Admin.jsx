import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div style={{marginBottom:"200px"}} >
      
      <div className="text-center mt-4">
        {/* Use Link component to navigate to the respective routes */}
        <Link to="/createProject">
          <button type="button" className="btn btn-secondary mx-2">
            UPDATE PROJECTS
          </button>
        </Link>

        <Link to="/createTestimonials">
          <button type="button" className="btn btn-success mx-2" >
            UPDATE TESTIMONIALS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
