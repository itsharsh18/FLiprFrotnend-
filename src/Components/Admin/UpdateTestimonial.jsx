import React, { useState } from "react";
import axios from "axios";

const UpdateTestimonial = () => {
  const [formData, setFormData] = useState({
    avatar: null,
    name: "",
    description: "",
    designation: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.designation || !formData.avatar) {
      setMessage("Please fill in all fields and select an avatar.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("Description", formData.description);
    formDataToSend.append("Designation", formData.designation);
    formDataToSend.append("avatar", formData.avatar);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/testimonials",
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
      setMessage("An error occurred while submitting the testimonial.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Submit Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            Avatar Image
          </label>
          <input
            type="file"
            className="form-control"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            placeholder="Enter your designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            placeholder="Enter the description"
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

export default UpdateTestimonial;
