import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/ProductController/GetAllProjjectData');
        setProjects(response.data.theProjectData);
        setLoading(false);
      } catch (err) {
        setError('Error fetching projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h2 style={{
        color: "blue",
        textDecoration: "underline",
        textAlign: 'center',
        textShadow: '2px 2px black',
        fontWeight: "800",
        marginTop: "50px"
      }}>Our Projects</h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4" key={index} style={{ marginBottom: '30px' }}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={project.image} className="card-img-top" alt={project.Name} />
                <div className="card-body">
                  <h5 className="card-title">{project.Name}</h5>
                  <p className="card-text">{project.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
