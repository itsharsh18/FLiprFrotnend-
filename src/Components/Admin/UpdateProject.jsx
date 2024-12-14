// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const UpdateProject = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!formData.name || !formData.description || !formData.image) {
      setMessage("Please fill in all fields and select an image.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Description", formData.description);
    formDataToSend.append("productimage", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/ProductController/productData",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while submitting the project.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Project Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="productimage"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter project name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Project Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            placeholder="Enter project description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {message && <p className="mt-3 alert alert-info">{message}</p>}
    </div>
  );
};

export default UpdateProject;
